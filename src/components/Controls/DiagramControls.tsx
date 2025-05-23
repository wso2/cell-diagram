/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useEffect, useRef } from "react";
import { FullScreenIcon, FitScreenIcon, AddIcon, RemoveIcon, RefreshIcon } from "../../resources/assets/icons";
import styled from "@emotion/styled";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { CanvasControlButton } from "./ControlButtons/ControlButton";
import gsap from "gsap";

interface ControlProps {
    engine: DiagramEngine;
    animation?: boolean;
    refreshDiagram?: () => void;
}

export const ControlPanel: React.FC<any> = styled.div`
    bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    position: absolute;
    right: 15px;
    width: 32px;
`;

export function DiagramControls(props: ControlProps) {
    const { engine, animation = true, refreshDiagram } = props;
    const controlPanelRef = useRef(null);

    useEffect(() => {
        if (animation) {
            gsap.fromTo(
                controlPanelRef.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 1,
                }
            );
        }
    }, []);

    const onZoom = (zoomIn: boolean) => {
        const delta: number = zoomIn ? +5 : -5;
        engine.getModel().setZoomLevel(engine.getModel().getZoomLevel() + delta);
        engine.repaintCanvas();
    };

    const zoomToFit = () => {
        engine.zoomToFitNodes({ margin: 10, maxZoom: 1 });
    };

    const zoomToActualSize = () => {
        engine.getModel().setZoomLevel(100);
        engine.repaintCanvas();
    };

    return (
        <ControlPanel ref={controlPanelRef}>
            {refreshDiagram && (
                <CanvasControlButton onClick={refreshDiagram} tooltipTitle={"Refresh"}>
                    <RefreshIcon />
                </CanvasControlButton>
            )}

            <CanvasControlButton onClick={zoomToFit} tooltipTitle={"Zoom to fit nodes"}>
                <FullScreenIcon />
            </CanvasControlButton>

            <CanvasControlButton onClick={zoomToActualSize} tooltipTitle={"Zoom to actual size"}>
                <FitScreenIcon />
            </CanvasControlButton>

            <div>
                <CanvasControlButton
                    onClick={() => {
                        onZoom(true);
                    }}
                    tooltipTitle={"Zoom in"}
                >
                    <AddIcon />
                </CanvasControlButton>

                <CanvasControlButton
                    onClick={() => {
                        onZoom(false);
                    }}
                    tooltipTitle={"Zoom out"}
                >
                    <RemoveIcon />
                </CanvasControlButton>
            </div>
        </ControlPanel>
    );
}
