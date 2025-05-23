/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import styled from "@emotion/styled";
import { CIRCLE_WIDTH, Colors, ICON_SCALE, LABEL_FONT_SIZE, LABEL_MAX_WIDTH } from "../../../resources";
import { Orientation } from "./ConnectionModel";

interface StyleProps {
    isAnonymous?: boolean;
    isSelected?: boolean;
    isClickable?: boolean;
    isCollapsed?: boolean;
    isFocused?: boolean;
    orientation?: Orientation;
    borderWidth?: number;
    previewMode?: boolean;
}

export const ConnectionNode = styled.div<StyleProps>`
    color: ${Colors.ON_SURFACE_VARIANT};
    display: flex;
    flex-direction: ${(props: StyleProps) => (props.orientation === Orientation.VERTICAL ? "column" : "row")};
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px;
    pointer-events: all;
    cursor: ${(props: StyleProps) => (props.previewMode ? "pointer" : "grab")};
    &:active {
        cursor: ${(props: StyleProps) => (props.previewMode ? "pointer" : "grabbing")};
    }
`;

export const ConnectionHead: React.FC<any> = styled.div`
    background-color: ${(props: StyleProps) => (props.isSelected ? Colors.SECONDARY_CONTAINER : Colors.SURFACE)};
    border: ${(props: StyleProps) =>
        `${props.borderWidth}px solid ${props.isSelected ? Colors.SECONDARY : props.isFocused ? Colors.SECONDARY : Colors.OUTLINE}`};
    border-radius: 50%;
    height: ${CIRCLE_WIDTH}px;
    width: ${CIRCLE_WIDTH}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConnectionName: React.FC<any> = styled.span`
    font-size: ${LABEL_FONT_SIZE}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${(props: StyleProps) => (props.orientation === Orientation.VERTICAL ? LABEL_MAX_WIDTH : "unset")};
`;

interface IconWrapperStyleProps {
    previewMode: boolean;
}
export const IconWrapper: React.FC<IconWrapperStyleProps> = styled.div`
    height: 32px;
    width: 32px;
    svg {
        fill: ${(props: StyleProps) => (props.isSelected ? Colors.SECONDARY : Colors.OUTLINE)};
        transform: ${(props: IconWrapperStyleProps) => (props.previewMode ? `scale(${ICON_SCALE.PREVIEW})` : "none")};
    }
`;
