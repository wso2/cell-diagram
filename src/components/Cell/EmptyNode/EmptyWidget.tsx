/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { DiagramEngine, PortModelAlignment } from "@projectstorm/react-diagrams";
import { EmptyModel } from "./EmptyModel";
import { EmptyNode } from "./styles";
import { CellPortWidget } from "../CellPort/CellPortWidget";
import { getNodePortId } from "../cell-util";
import { useDiagramContext } from "../../DiagramContext/DiagramContext";

interface EmptyWidgetProps {
    node: EmptyModel;
    engine: DiagramEngine;
}

export function EmptyWidget(props: EmptyWidgetProps) {
    const { node, engine } = props;
    const { previewMode } = useDiagramContext();

    return (
        <EmptyNode width={node.width} previewMode={previewMode}>
            <CellPortWidget port={node.getPort(getNodePortId(node.getID(), PortModelAlignment.TOP))} engine={engine} />
            <CellPortWidget port={node.getPort(getNodePortId(node.getID(), PortModelAlignment.BOTTOM))} engine={engine} />
            <CellPortWidget port={node.getPort(getNodePortId(node.getID(), PortModelAlignment.LEFT))} engine={engine} />
            <CellPortWidget port={node.getPort(getNodePortId(node.getID(), PortModelAlignment.RIGHT))} engine={engine} />
        </EmptyNode>
    );
}
