/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useEffect, useRef, useState } from "react";
import { DiagramEngine, DiagramModel } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import {
    generateEngine,
    getComponentDiagramWidth,
    getDiagramDataFromProject,
    manualDistribute,
    calculateCellWidth,
    isRenderInsideCell,
    animateProjectDiagram,
} from "../utils";
import { DiagramControls, OverlayLayerModel, CellDiagramContext, PromptScreen, ConnectionModel } from "../components";
import { Colors, DIAGRAM_END, MAIN_CELL, MARGIN, NO_CELL_NODE } from "../resources";
import { Container, DiagramContainer, useStyles } from "../utils/CanvasStyles";
import { CustomTooltips, DiagramLayer, MoreVertMenuItem, ObservationSummary, Project } from "../types";
import { CellModel } from "../components/Cell/CellNode/CellModel";
import { DiagramLayers } from "../components/Controls/DiagramLayers";
import { DiagramLegend } from "../components/Controls/DiagramLegend";
import CircularProgress from "@material-ui/core/CircularProgress";

export { DiagramLayer } from "../types";
export type { MoreVertMenuItem, Project } from "../types";

export interface ProjectDiagramProps {
    project: Project;
    componentMenu?: MoreVertMenuItem[];
    showControls?: boolean;
    animation?: boolean;
    defaultDiagramLayer?: DiagramLayer;
    customTooltips?: CustomTooltips;
    modelVersion?: string;
    onComponentDoubleClick?: (componentId: string) => void;
    previewMode?: boolean;
}

export function ProjectDiagram(props: ProjectDiagramProps) {
    const {
        project,
        componentMenu,
        showControls = true,
        animation = true,
        defaultDiagramLayer = DiagramLayer.ARCHITECTURE,
        customTooltips,
        modelVersion,
        onComponentDoubleClick,
        previewMode = false,
    } = props;

    const [diagramEngine] = useState<DiagramEngine>(generateEngine(previewMode));
    const [diagramModel, setDiagramModel] = useState<DiagramModel | undefined>(undefined);
    const [selectedNodeId, setSelectedNodeId] = useState<string>("");
    const [focusedNodeId, setFocusedNodeId] = useState<string>("");
    const [userMessage, setUserMessage] = useState<string>("");
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isDiagramLoaded, setIsDiagramLoaded] = useState(false);

    const cellNodeWidth = useRef<number>(0); // INFO: use this reference to check if cell node width should change
    const observationSummary = useRef<ObservationSummary>(null);

    const styles = useStyles();

    useEffect(() => {
        if (diagramEngine) {
            drawDiagram();
        }
        return () => {
            diagramEngine
                .getModel()
                ?.getNodes()
                .forEach((node) => {
                    if (isRenderInsideCell(node)) {
                        node.clearListeners();
                    }
                });
        };
    }, [props]);

    useEffect(() => {
        if (diagramEngine && animation && isDiagramLoaded) {
            animateProjectDiagram();
            diagramEngine.repaintCanvas();
        }
    }, [isDiagramLoaded, diagramEngine]);

    useEffect(() => {
        const listener = diagramEngine.getModel()?.registerListener({
            zoomUpdated: (event: any) => {
                setZoomLevel(event.zoom);
            },
        });
        return () => {
            diagramEngine.getModel()?.deregisterListener(listener);
        };
    }, [diagramEngine]);

    useEffect(() => {
        if (diagramEngine.getCanvas()) {
            document.addEventListener("keydown", handleEscapePress);
        }
        return () => {
            document.removeEventListener("keydown", handleEscapePress);
        };
    }, [diagramModel, diagramEngine.getCanvas()]);

    function handleEscapePress(event: KeyboardEvent) {
        if (event.key === "Escape" && selectedNodeId) {
            setSelectedNodeId("");
        }
    }

    // draw diagram
    const drawDiagram = () => {
        // get diagram data (nodes, links, gateways) from project
        const diagramData = getDiagramDataFromProject(project);
        // auto distribute component nodes, component links, empty nodes and cell links
        // get component diagram boundaries
        // calculate component diagram width
        const componentDiagramWidth = getComponentDiagramWidth(diagramData);
        cellNodeWidth.current = componentDiagramWidth;
        // get cell node
        const cellNode = new CellModel(
            MAIN_CELL,
            componentDiagramWidth,
            diagramData.gateways,
            Array.from((diagramData.nodes.connectorNodes as Map<string, ConnectionModel>).values()),
            Array.from((diagramData.nodes.connectionNodes as Map<string, ConnectionModel>).values())
        );
        // create diagram model
        const model = new DiagramModel();
        // add preloader overlay layer
        model.addLayer(new OverlayLayerModel());
        // add node and links to diagram model
        const models = model.addAll(
            // nodes
            cellNode,
            ...diagramData.nodes.componentNodes.values(),
            ...diagramData.nodes.connectionNodes.values(),
            ...diagramData.nodes.connectorNodes.values(),
            ...diagramData.nodes.emptyNodes.values(),
            ...diagramData.nodes.externalNodes.values(),
            // links
            ...diagramData.links.connectionLinks.values(),
            ...diagramData.links.connectorLinks.values(),
            ...diagramData.links.externalLinks.values(),
            ...diagramData.links.componentLinks.values(),
            ...diagramData.links.cellLinks.values(),
            ...diagramData.links.externalConnectionLinks.values()
        );

        models.forEach((item) => {
            if (isRenderInsideCell(item)) {
                item.registerListener({
                    positionChanged: () => {
                        refreshDiagram();
                    },
                });
            }
        });
        // initially render end of diagram
        model.setOffset(DIAGRAM_END * 4, DIAGRAM_END * 4);
        // draw diagram with all nodes and links
        diagramEngine.setModel(model);
        setDiagramModel(model);

        if (previewMode) {
            // Disable dragging for all nodes
            diagramEngine.getModel().setLocked(true);
            const state = diagramEngine.getStateMachine().getCurrentState();
            (state as any).dragCanvas.config.allowDrag = false;
        }

        // update observability summary
        observationSummary.current = diagramData.observationSummary;

        setTimeout(() => {
            // manual distribute - update empty node, external node and connector node position based on cell node position
            manualDistribute(model);
            if (diagramEngine.getCanvas()?.getBoundingClientRect) {
                // zoom to fit nodes and center diagram
                diagramEngine.zoomToFitNodes({ 
                    margin: previewMode ? MARGIN.PREVIEW : MARGIN.DEFAULT, 
                    maxZoom: 1 
                });
            }
            // remove preloader overlay layer
            const overlayLayer = diagramEngine
                .getModel()
                .getLayers()
                .find((layer) => layer instanceof OverlayLayerModel);
            if (overlayLayer) {
                diagramEngine.getModel().removeLayer(overlayLayer);
            }
            // update diagram
            diagramEngine.setModel(model);
            diagramEngine.repaintCanvas();
            // After all diagram setup is complete
            setIsDiagramLoaded(true);
        }, 1000);
    };

    // refresh diagram
    const refreshDiagram = () => {
        // calculate component diagram width
        const model = diagramEngine.getModel();
        const cellWidth = calculateCellWidth(model);
        // TODO: check if cell node width should change
        const cellNode = model.getNode(MAIN_CELL);
        // change cell node width
        if (!cellNode) {
            setUserMessage(NO_CELL_NODE); // TODO: handle error properly
            return;
        }
        cellNode.width = cellWidth;
        cellNode.updateDimensions({ width: cellWidth, height: cellWidth });

        setTimeout(() => {
            // manual distribute - update empty node, external node and connector node position based on cell node position
            manualDistribute(model);
            // update diagram
            diagramEngine.setModel(model);
            diagramEngine.repaintCanvas();
            // update cell node width
            cellNodeWidth.current = cellWidth;
        }, 8);
    };

    const showDiagramLayers = (showControls && observationSummary.current?.requestCount.max > 0 && !previewMode) || false;

    const ctx = {
        selectedNodeId,
        focusedNodeId,
        componentMenu,
        zoomLevel,
        observationSummary: observationSummary.current,
        defaultDiagramLayer,
        modelVersion : modelVersion || "v1", 
        setSelectedNodeId,
        setFocusedNodeId,
        onComponentDoubleClick,
        previewMode
    };

    const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (previewMode && onComponentDoubleClick) {
            // In preview mode, clicking anywhere on the canvas should trigger the onComponentDoubleClick
            onComponentDoubleClick(MAIN_CELL);
            return;
        }
        
        if (focusedNodeId && event.target === diagramEngine.getCanvas()) {
            setFocusedNodeId("");
        }
    };



    return (
        <Container>
            <CellDiagramContext {...ctx}>
                <DiagramContainer onClick={handleCanvasClick}
                    className={previewMode ? "preview-mode" : ""
                }>
                    {diagramEngine?.getModel() && diagramModel ? (
                        <>
                            <CanvasWidget
                                engine={diagramEngine}
                                className={`${styles.canvas} cell-diagram-canvas`}
                            />
                            {showControls && !previewMode && <DiagramControls engine={diagramEngine} animation={animation} />}
                            {showDiagramLayers && (
                                <DiagramLayers animation={animation} tooltips={customTooltips?.diagramLayers} />
                            )}
                            {showDiagramLayers && <DiagramLegend animation={animation} />}
                        </>
                    ) : userMessage ? (
                        <PromptScreen userMessage={userMessage} />
                    ) : (
                        <CircularProgress sx={{ color: Colors.PRIMARY }} />
                    )}
                </DiagramContainer>
            </CellDiagramContext>
        </Container>
    );
}
