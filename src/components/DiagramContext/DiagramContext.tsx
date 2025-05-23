/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { createContext, ReactNode } from "react";
import { DiagramLayer } from "../../types";
import { useActiveLayers } from "../../hooks/useActiveLayers";
import { MoreVertMenuItem, ObservationSummary } from "../../types";

interface IDiagramContext {
    selectedNodeId: string;
    focusedNodeId?: string;
    componentMenu?: MoreVertMenuItem[];
    zoomLevel: number;
    observationSummary?: ObservationSummary;
    modelVersion?: string;
    previewMode?: boolean;
    setSelectedNodeId: (id: string) => void;
    setFocusedNodeId?: (id: string) => void;
    onComponentDoubleClick?: (componentId: string) => void;
    diagramLayers: {
        activeLayers: DiagramLayer[];
        setLayer: (layer: DiagramLayer) => void;
        addLayer: (layer: DiagramLayer) => void;
        removeLayer: (layer: DiagramLayer) => void;
        hasLayer: (layer: DiagramLayer) => boolean;
    };
}
// Omitted states are handled by the Diagram context provider
type OmittedDiagramContext = Omit<IDiagramContext, "diagramLayers">;
interface DiagramContextProps extends OmittedDiagramContext {
    children: ReactNode;
    defaultDiagramLayer: DiagramLayer;
}

const defaultState: any = {};
export const DiagramContext = createContext<IDiagramContext>(defaultState);

export function CellDiagramContext(props: DiagramContextProps) {
    const {
        children,
        selectedNodeId,
        focusedNodeId,
        componentMenu,
        zoomLevel,
        observationSummary,
        defaultDiagramLayer,
        modelVersion,
        previewMode,
        setSelectedNodeId,
        setFocusedNodeId,
        onComponentDoubleClick,
    } = props;

    const { activeLayers, addLayer, removeLayer, setLayer, hasLayer } = useActiveLayers({ defaultDiagramLayer });

    const context: IDiagramContext = {
        selectedNodeId,
        focusedNodeId,
        componentMenu,
        zoomLevel,
        observationSummary,
        modelVersion,
        previewMode,
        setSelectedNodeId,
        setFocusedNodeId,
        onComponentDoubleClick,
        diagramLayers: {
            activeLayers,
            setLayer,
            addLayer,
            removeLayer,
            hasLayer,
        },
    };

    return <DiagramContext.Provider value={{ ...context }}>{children}</DiagramContext.Provider>;
}

export const useDiagramContext = () => React.useContext(DiagramContext);
