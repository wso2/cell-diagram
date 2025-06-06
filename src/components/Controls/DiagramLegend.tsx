/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { Colors } from "../../resources";
import { DiagramContext } from "../DiagramContext/DiagramContext";
import { DiagramLayer } from "../../types";

export const DiagramLegendPanel: React.FC<any> = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 4px;

    padding: 8px;

    background-color: ${Colors.SURFACE};
    border: 1px solid ${Colors.SURFACE_DIM};
`;

export const LegendRow: React.FC<any> = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 8px;
`;

export const Text: React.FC<any> = styled.div`
    font-size: 12px;
    user-select: none;
    color: ${Colors.ON_SURFACE_VARIANT};
`;

interface DiagramLegendProps {
    animation?: boolean;
}

export function DiagramLegend(props: DiagramLegendProps) {
    const { animation = true } = props;

    const {
        diagramLayers: { hasLayer },
    } = useContext(DiagramContext);

    const controlPanelRef = useRef(null);
    const hasArchitectureLayer = hasLayer(DiagramLayer.ARCHITECTURE);
    const hasObservabilityLayer = hasLayer(DiagramLayer.OBSERVABILITY);
    const hasDiffLayer = hasLayer(DiagramLayer.DIFF);

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

    return (
        <DiagramLegendPanel ref={controlPanelRef}>
            {(hasObservabilityLayer || hasDiffLayer) && (
                <LegendRow>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width={50} height={10}>
                        <g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none">
                            <line
                                x1="0"
                                y1="25"
                                x2="200"
                                y2="25"
                                markerEnd={hasObservabilityLayer ? "" : "url(#solidLinkArrow)"}
                                stroke={hasObservabilityLayer ? Colors.PRIMARY : Colors.ON_SURFACE_VARIANT}
                            ></line>
                        </g>
                        <defs>
                            <marker
                                id={"solidLinkArrow"}
                                markerWidth="5"
                                markerHeight="5"
                                markerUnits="strokeWidth"
                                refX="4"
                                refY="3"
                                viewBox="0 0 6 6"
                                orient="auto"
                            >
                                <polygon points="0,6 0,0 5,3" fill={hasObservabilityLayer ? Colors.PRIMARY : Colors.ON_SURFACE_VARIANT}></polygon>
                            </marker>
                        </defs>
                    </svg>
                    {hasObservabilityLayer && !hasDiffLayer && <Text>Only runtime dependency</Text>}
                    {hasObservabilityLayer && hasDiffLayer && <Text>Both static and runtime dependency</Text>}
                    {!hasObservabilityLayer && hasDiffLayer && <Text>Both static and runtime dependency</Text>}
                </LegendRow>
            )}
            {hasArchitectureLayer && !hasDiffLayer && (
                <LegendRow>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width={50} height={10}>
                        <g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none">
                            <line
                                x1="0"
                                y1="25"
                                x2="200"
                                y2="25"
                                markerEnd={hasObservabilityLayer ? "" : "url(#solidLinkArrow)"}
                                stroke={Colors.ON_SURFACE_VARIANT}
                            ></line>
                        </g>
                        <defs>
                            <marker
                                id={"solidLinkArrow"}
                                markerWidth="5"
                                markerHeight="5"
                                markerUnits="strokeWidth"
                                refX="4"
                                refY="3"
                                viewBox="0 0 6 6"
                                orient="auto"
                            >
                                <polygon points="0,6 0,0 5,3" fill={Colors.ON_SURFACE_VARIANT}></polygon>
                            </marker>
                        </defs>
                    </svg>
                    <Text>Only static dependency</Text>
                </LegendRow>
            )}
            {hasDiffLayer && (
                <LegendRow>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width={50} height={10}>
                        <g strokeWidth={10} stroke="hsl(0, 0%, 30%)" fill="none">
                            <line x1={0} y1={25} x2={200} y2={25} markerEnd={hasObservabilityLayer ? "" : "url(#redLinkArrow)"} stroke={Colors.ERROR}></line>
                        </g>
                        <defs>
                            <marker
                                id={"redLinkArrow"}
                                markerWidth="5"
                                markerHeight="5"
                                markerUnits="strokeWidth"
                                refX="4"
                                refY="3"
                                viewBox="0 0 6 6"
                                orient="auto"
                            >
                                <polygon points="0,6 0,0 5,3" fill={Colors.ERROR}></polygon>
                            </marker>
                        </defs>
                    </svg>
                    <Text>Only runtime dependency</Text>
                </LegendRow>
            )}
            {hasDiffLayer && (
                <LegendRow>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width={50} height={10}>
                        <g strokeWidth="10" stroke="hsl(0, 0%, 30%)" fill="none">
                            <line
                                x1="0"
                                y1="25"
                                x2="200"
                                y2="25"
                                markerEnd={hasObservabilityLayer ? "" : "url(#dashLinkArrow)"}
                                strokeDasharray={"20,20"}
                            ></line>
                        </g>
                        <defs>
                            <marker
                                id={"dashLinkArrow"}
                                markerWidth="5"
                                markerHeight="5"
                                markerUnits="strokeWidth"
                                refX="4"
                                refY="3"
                                viewBox="0 0 6 6"
                                orient="auto"
                            >
                                <polygon points="0,6 0,0 5,3" fill={Colors.ON_SURFACE_VARIANT}></polygon>
                            </marker>
                        </defs>
                    </svg>
                    <Text>Only static dependency</Text>
                </LegendRow>
            )}
        </DiagramLegendPanel>
    );
}
