/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import { DiagramEngine, LinkModel, PortModel, PortModelAlignment } from "@projectstorm/react-diagrams";
import { ComponentModel } from "./ComponentModel";
import { ComponentLinkModel } from "../ComponentLink/ComponentLinkModel";
import { ComponentHeadWidget } from "./ComponentHead/ComponentHead";
import { ComponentName, ComponentNode, PortsContainer } from "./styles";
import { DiagramContext } from "../../DiagramContext/DiagramContext";
import { ComponentPortWidget } from "../ComponentPort/ComponentPortWidget";
import { Tooltip } from "@mui/material";
import { ExternalConsumerLinkSelectEvent } from "../../../types";
import { CellBounds } from "../../Cell/CellNode/CellModel";


interface ComponentWidgetProps {
    node: ComponentModel;
    engine: DiagramEngine;
}

export function ComponentWidget(props: ComponentWidgetProps) {
    const { node, engine } = props;
    const { selectedNodeId, focusedNodeId, componentMenu, onComponentDoubleClick, previewMode } = useContext(DiagramContext);
    const [selectedLink, setSelectedLink] = useState<ComponentLinkModel>(undefined);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const headPorts = useRef<PortModel[]>([]);

    const displayName: string = node.component.label || node.component.id;
    const isDisabled = node.component.disabled?.status;

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
        headPorts.current.push(node.getPortFromID(`left-${node.getID()}`));
        headPorts.current.push(node.getPortFromID(`right-${node.getID()}`));
        headPorts.current.push(node.getPortFromID(`bottom-${node.getID()}`));

        const handleExternalConsumerLink = (evt: ExternalConsumerLinkSelectEvent, action: 'SELECT' | 'UNSELECT') => {
            setIsHovered(action === 'SELECT');
            const portId = evt.cellBound === CellBounds.NorthBound ? 'top' : 'left';
            const alignment = evt.cellBound === CellBounds.NorthBound ? PortModelAlignment.TOP : PortModelAlignment.LEFT;
            const port = node.getPort(`${portId}-${node.getID()}`);
            const portLinks: Map<string, LinkModel> = new Map(Object.entries(port.links));
            portLinks.forEach((link) => {
                if (link.getTargetPort().getOptions().alignment === alignment) {
                    link.fireEvent({}, action);
                }
            });
        };

        const externalConsumerListener = node.registerListener({
            EXTERNAL_CONSUMER_LINK_SELECT: (evt: ExternalConsumerLinkSelectEvent) => {
                handleExternalConsumerLink(evt, 'SELECT');
            },
            EXTERNAL_CONSUMER_LINK_UNSELECT: (evt: ExternalConsumerLinkSelectEvent) => {
                handleExternalConsumerLink(evt, 'UNSELECT');
            },
        });

        return () => {
            node.deregisterListener(listener);
            node.deregisterListener(externalConsumerListener);
        };
    }, [node]);

    const handleOnHover = (task: string) => {
        setIsHovered(task === "SELECT" ? true : false);
        node.handleHover(headPorts.current, task);
    };

    const handleOnWidgetDoubleClick = () => {
        if (onComponentDoubleClick) {
            onComponentDoubleClick(node.component.id);
        }
    };

    const handleMouseEnter = () => {
        if (previewMode) {
            return;
        }
        setIsHovered(true);
        handleOnHover("SELECT");
    };

    const handleMouseLeave = () => {
        if (previewMode) {
            return;
        }
        setIsHovered(false);
        handleOnHover("UNSELECT");
    };

    const handleOnContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <ComponentNode
            previewMode={previewMode}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleOnWidgetDoubleClick}
            onContextMenu={handleOnContextMenu}
        >
            <ComponentHeadWidget
                engine={engine}
                node={node}
                isSelected={node.getID() === selectedNodeId || node.isNodeSelected(selectedLink, node.getID())}
                isFocused={node.getID() === focusedNodeId || isHovered}
                menuItems={componentMenu}
                onFocusOut={handleMouseLeave}
            />
            <Tooltip title={displayName} placement="bottom" enterNextDelay={500} arrow>
                {!previewMode ? <ComponentName disabled={isDisabled}>{displayName}</ComponentName> : <></>}
            </Tooltip>
            <PortsContainer>
                <ComponentPortWidget port={node.getPort(`top-${node.getID()}`)} engine={engine} />
                <ComponentPortWidget port={node.getPort(`bottom-${node.getID()}`)} engine={engine} />
            </PortsContainer>
        </ComponentNode>
    );
}
