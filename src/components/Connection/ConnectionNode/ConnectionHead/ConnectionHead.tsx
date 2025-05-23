/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import { DiagramEngine, PortModel } from "@projectstorm/react-diagrams";
import { ConnectionModel } from "../ConnectionModel";
import { ConnectionHead, IconWrapper } from "../styles";
import { ConnectionIcon, DatabaseIcon } from "../../../../resources/assets/icons";
import { ConnectionPortWidget } from "../../ConnectionPort/ConnectionPortWidget";
import { ConnectionType } from "../../../../types";
import { DiagramContext } from "../../../DiagramContext/DiagramContext";
import { COMPONENT_LINE_MIN_WIDTH, COMPONENT_LINE_PREVIEW_WIDTH } from "../../../../resources";

interface ServiceHeadProps {
    engine: DiagramEngine;
    node: ConnectionModel;
    isSelected: boolean;
}

export function ConnectionHeadWidget(props: ServiceHeadProps) {
    const { engine, node, isSelected } = props;

    const { zoomLevel, previewMode } = useContext(DiagramContext);
    const headPorts = useRef<PortModel[]>([]);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        headPorts.current.push(node.getPortFromID(`left-${node.getID()}`));
        headPorts.current.push(node.getPortFromID(`right-${node.getID()}`));
    }, [node]);

    const handleOnHover = (task: string) => {
        if (previewMode) {
            return;
        }
        setIsHovered(task === "SELECT" ? true : false);
        node.handleHover(headPorts.current, task);
    };

    // get connection icon
    const getConnectionIcon = () => {
        switch (node.connection.type) {
            case ConnectionType.Datastore:
                return <DatabaseIcon />;
            default:
                return <ConnectionIcon />;
        }
    };

    return (
        <ConnectionHead
            isSelected={isSelected || isHovered}
            borderWidth={previewMode ? COMPONENT_LINE_PREVIEW_WIDTH : node.getDynamicLineWidth(zoomLevel, COMPONENT_LINE_MIN_WIDTH)}
            onMouseOver={() => handleOnHover("SELECT")}
            onMouseLeave={() => handleOnHover("UNSELECT")}
        >
            <IconWrapper previewMode={previewMode}>{getConnectionIcon()}</IconWrapper>
            <ConnectionPortWidget port={node.getPort(`top-${node.getID()}`)} engine={engine} />
            <ConnectionPortWidget port={node.getPort(`left-${node.getID()}`)} engine={engine} />
        </ConnectionHead>
    );
}
