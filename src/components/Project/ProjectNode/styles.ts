/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import styled from "@emotion/styled";
import { Colors, LABEL_FONT_SIZE, LABEL_MAX_WIDTH } from "../../../resources";

const PRIMARY_HOVER: string = "#2c09ed";

interface StyleProps {
    isAnonymous: boolean;
    isSelected?: boolean;
    isClickable?: boolean;
    isCollapsed?: boolean;
    isFocused?: boolean;
    borderWidth?: number;
    hasComponentKind?: boolean;
}

export const ProjectNode: React.FC<any> = styled.div`
    color: ${Colors.ON_SURFACE_VARIANT};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 2px;
    pointer-events: all;
    &:active {
        cursor: grabbing;
    }
`;

interface ProjectNodeStyleProps {
    id: string;
    height: number;
    borderWidth: number;
    isSelected?: boolean;
}

export const ProjectCellNode: React.FC<ProjectNodeStyleProps> = styled.div`
    width: ${(props: ProjectNodeStyleProps) => props.height}px;
    height: ${(props: ProjectNodeStyleProps) => props.height}px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;
    overflow: visible;
    pointer-events: none;

    #mainCell svg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    #mainCell path {
        stroke: ${(props: ProjectNodeStyleProps) => (props.isSelected ? Colors.SECONDARY : Colors.ON_SURFACE)};
        stroke-width: ${(props: ProjectNodeStyleProps) => props.borderWidth};
        fill: ${(props: ProjectNodeStyleProps) =>
            props.isSelected ? Colors.SECONDARY_CONTAINER : Colors.SURFACE};
        pointer-events: none;
    }
`;

export const ProjectName: React.FC<any> = styled.span`
    font-size: ${LABEL_FONT_SIZE}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    /* max-width: ${LABEL_MAX_WIDTH}px; */
    &:hover {
        color: ${(props: StyleProps) => (props.isClickable ? PRIMARY_HOVER : ``)};
        text-decoration: ${(props: StyleProps) => (props.isClickable ? `underline` : ``)};
    }
`;

export const TopArrowContainer = styled.div`
    position: absolute;
    top: 0;
`;
