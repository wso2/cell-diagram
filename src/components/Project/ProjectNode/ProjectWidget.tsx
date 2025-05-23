/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import Fade from '@mui/material/Fade';
import { Box, Tooltip } from "@mui/material";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { DiagramEngine, PortModel } from "@projectstorm/react-diagrams";
import { ProjectModel } from "./ProjectModel";
import { ProjectHeadWidget } from "./ProjectHeadWidget/ProjectHeadWidget";
import { ProjectName, ProjectNode } from "./styles";
import { DiagramContext } from "../../DiagramContext/DiagramContext";
import { Colors } from "../../../resources";

interface ProjectWidgetProps {
    node: ProjectModel;
    engine: DiagramEngine;
}

export function ProjectWidget(props: ProjectWidgetProps) {
    const { node, engine } = props;
    const { selectedNodeId, focusedNodeId, componentMenu, onComponentDoubleClick } = useContext(DiagramContext);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const headPorts = useRef<PortModel[]>([]);

    const displayName: string = node.project.name;

    useEffect(() => {
        headPorts.current.push(node.getPortFromID(`right-${node.getID()}`));
    }, [node]);

    const handleOnHover = (task: string) => {
        setIsHovered(task === "SELECT" ? true : false);
        node.handleHover(headPorts.current, task);
    };

    const handleOnWidgetDoubleClick = () => {
        if (onComponentDoubleClick) {
            onComponentDoubleClick(node.project.id);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        handleOnHover("SELECT");
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        handleOnHover("UNSELECT");
    };

    const handleOnContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <>
            <ProjectNode
                isSelected={node.getID() === selectedNodeId}
                isFocused={node.getID() === focusedNodeId}
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDoubleClick={handleOnWidgetDoubleClick}
                onContextMenu={handleOnContextMenu}
            >
                <ProjectHeadWidget
                    engine={engine}
                    node={node}
                    isSelected={node.getID() === selectedNodeId}
                    isFocused={node.getID() === focusedNodeId || isHovered}
                    menuItems={componentMenu}
                />
                <Tooltip title={displayName} placement="bottom" enterNextDelay={500} arrow>
                    <ProjectName>{displayName}</ProjectName>
                </Tooltip>

                <Box sx={{ position: 'absolute', top: '26px', padding: '8px', cursor: 'pointer' }} onClick={handleOnWidgetDoubleClick}>
                    <Fade in={isHovered} timeout={350}>
                        <Tooltip title="View Project" placement="bottom" enterNextDelay={1000}>
                            <OpenInNewRoundedIcon sx={{ color: Colors.OUTLINE_VARIANT, fontSize: 20 }} />
                        </Tooltip>
                    </Fade>
                </Box>
            </ProjectNode>
        </>
    );
}
