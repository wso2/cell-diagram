/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { DiagramEngine, PortModelAlignment, PortWidget } from "@projectstorm/react-diagrams";
import { ProjectPortModel } from "./ProjectPortModel";
import { BottomPortNode, LeftPortNode, PortNode, RightPortNode, TopPortNode } from "./styles";

interface CustomPortProps {
    port: ProjectPortModel;
    engine: DiagramEngine;
    isSelected: boolean;
}

export function ProjectPortWidget(props: CustomPortProps) {
    const { port, engine, isSelected } = props;

    let DynamicPotNode = PortNode;

    switch (port.getOptions().alignment) {
        case PortModelAlignment.LEFT:
            DynamicPotNode = LeftPortNode;
            break;
        case PortModelAlignment.RIGHT:
            DynamicPotNode = RightPortNode;
            break;
        case PortModelAlignment.TOP:
            DynamicPotNode = TopPortNode;
            break;
        case PortModelAlignment.BOTTOM:
            DynamicPotNode = BottomPortNode;
            break;
    }

    return (
        <DynamicPotNode isSelected={isSelected}>
            <PortWidget engine={engine} port={port} />
        </DynamicPotNode>
    );
}
