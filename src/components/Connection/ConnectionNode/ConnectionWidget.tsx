/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useContext, useEffect, useState } from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { ConnectionModel } from "./ConnectionModel";
import { ConnectionHeadWidget } from "./ConnectionHead/ConnectionHead";
import { ConnectionName, ConnectionNode } from "./styles";
import { DiagramContext } from "../../DiagramContext/DiagramContext";
import { ComponentLinkModel } from "../../Component/ComponentLink/ComponentLinkModel";

interface ConnectionWidgetProps {
    node: ConnectionModel;
    engine: DiagramEngine;
}

export function ConnectionWidget(props: ConnectionWidgetProps) {
    const { node, engine } = props;
    const { selectedNodeId, focusedNodeId, previewMode } = useContext(DiagramContext);
    const [selectedLink, setSelectedLink] = useState<ComponentLinkModel>(undefined);
    const displayName = node.connection.label || node.connection.id;

    useEffect(() => {
        if (previewMode) {
            return;
        }
        const listener = node.registerListener({
            SELECT: (event: any) => {
                setSelectedLink(event.component as ComponentLinkModel);
            },
            UNSELECT: () => {
                setSelectedLink(undefined);
            },
        });
        return () => {
            node.deregisterListener(listener);
        };
    }, [node]);

    return (
        <ConnectionNode
            previewMode={previewMode}
            isSelected={node.getID() === selectedNodeId || node.isNodeSelected(selectedLink, node.getID())}
            isFocused={node.getID() === focusedNodeId}
            orientation={node.orientation}
        >
            <ConnectionHeadWidget
                engine={engine}
                node={node}
                isSelected={node.getID() === selectedNodeId || node.isNodeSelected(selectedLink, node.getID())}
            />
            {!previewMode && <ConnectionName orientation={node.orientation}>{displayName}</ConnectionName>}
        </ConnectionNode>
    );
}
