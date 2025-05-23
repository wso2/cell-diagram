/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, {  } from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { ExternalModel } from "./ExternalModel";
import { ExternalNode } from "./styles";
import { CellPortWidget } from "../../Cell/CellPort/CellPortWidget";

interface ExternalWidgetProps {
    node: ExternalModel;
    engine: DiagramEngine;
}

export function ExternalWidget(props: ExternalWidgetProps) {
    const { node, engine } = props;
    return (
        <ExternalNode>
            <CellPortWidget port={node.getPort(`left-${node.getID()}`)} engine={engine} />
            <CellPortWidget port={node.getPort(`right-${node.getID()}`)} engine={engine} />
            <CellPortWidget port={node.getPort(`top-${node.getID()}`)} engine={engine} />
            <CellPortWidget port={node.getPort(`bottom-${node.getID()}`)} engine={engine} />
        </ExternalNode>
    );
}
