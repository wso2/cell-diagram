/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
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

export const ConnectionHead = styled.div<StyleProps>`
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

export const ConnectionName = styled.span<StyleProps>`
    font-size: ${LABEL_FONT_SIZE}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${(props: StyleProps) => (props.orientation === Orientation.VERTICAL ? LABEL_MAX_WIDTH : "unset")};
`;

interface IconWrapperStyleProps {
    previewMode: boolean;
}
export const IconWrapper = styled.div<IconWrapperStyleProps>`
    height: 32px;
    width: 32px;
    svg {
        fill: ${(props: StyleProps) => (props.isSelected ? Colors.SECONDARY : Colors.OUTLINE)};
        transform: ${(props: IconWrapperStyleProps) => (props.previewMode ? `scale(${ICON_SCALE.PREVIEW})` : "none")};
    }
`;
