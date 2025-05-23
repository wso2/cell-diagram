/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { ProjectModel } from "../ProjectModel";
import { ProjectCellNode } from "../styles";
import { MoreVertMenuItem } from "../../../../types";
import { ProjectPortWidget } from "../../ProjectPort/ProjectPortWidget";
import { generateRoundedOctagonSVG } from "../../../Cell/CellNode/CellWidget";
import { CellBounds } from "../../../Cell/CellNode/CellModel";
import { CELL_LINE_MIN_WIDTH, COMPONENT_CIRCLE_WIDTH } from "../../../../resources";

interface ServiceHeadProps {
    engine: DiagramEngine;
    node: ProjectModel;
    isSelected: boolean;
    isFocused: boolean;
    menuItems: MoreVertMenuItem[];
}

export function ProjectHeadWidget(props: ServiceHeadProps) {
    const { engine, node, isSelected, isFocused } = props;

    const cellHeight = COMPONENT_CIRCLE_WIDTH;
    const strokeWidth = CELL_LINE_MIN_WIDTH;
    const isExposedToInternet = node.project.connections?.some(
        (connection) => connection.source?.boundary === CellBounds.NorthBound
    );
    const hasExternalDependencies = node.project.connections?.some(
        (connection) => connection.source?.boundary === CellBounds.SouthBound
    );
    const hasInternalDependencies = node.project.connections?.some(
        (connection) => connection.source?.boundary === CellBounds.EastBound
    );

    return (
        <ProjectCellNode
            id={node.project.id}
            height={cellHeight}
            borderWidth={strokeWidth}
            isSelected={isSelected || isFocused}
        >
            {generateRoundedOctagonSVG(cellHeight, 0.3)}

            {isExposedToInternet && (
                <ProjectPortWidget
                    port={node.getPort(`top-${node.getID()}`)}
                    engine={engine}
                    isSelected={isSelected || isFocused}
                />
            )}
            {hasExternalDependencies && (
                <ProjectPortWidget
                    port={node.getPort(`bottom-${node.getID()}`)}
                    engine={engine}
                    isSelected={isSelected || isFocused}
                />
            )}
            <ProjectPortWidget
                port={node.getPort(`left-${node.getID()}`)}
                engine={engine}
                isSelected={isSelected || isFocused}
            />
            {hasInternalDependencies && (
                <ProjectPortWidget
                    port={node.getPort(`right-${node.getID()}`)}
                    engine={engine}
                    isSelected={isSelected || isFocused}
                />
            )}
        </ProjectCellNode>
    );
}
