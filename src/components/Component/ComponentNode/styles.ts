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
import { COMPONENT_CIRCLE_WIDTH, Colors, ICON_SCALE, LABEL_FONT_SIZE, LABEL_MAX_WIDTH } from "../../../resources";

interface ComponentNodeStyleProps {
    previewMode: boolean;
}
export const ComponentNode = styled.div<ComponentNodeStyleProps>`
    color: ${Colors.ON_SURFACE_VARIANT};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${COMPONENT_CIRCLE_WIDTH * 2}px;
    gap: 10px;
    padding: 2px;
    pointer-events: all;
    cursor: ${(props: ComponentNodeStyleProps) => (props.previewMode ? "pointer" : "grab")};
    &:active {
        cursor: ${(props: ComponentNodeStyleProps) => (props.previewMode ? "pointer" : "grabbing")};
    }
`;

interface ComponentHeadStyleProps {
    isSelected: boolean;
    borderWidth: number;
    disabled: boolean;
}
export const ComponentHead = styled.div<ComponentHeadStyleProps>`
    background-color: ${(props: ComponentHeadStyleProps) =>
        !props.disabled && props.isSelected ? Colors.SECONDARY_CONTAINER : Colors.SURFACE};
    border: ${(props: ComponentHeadStyleProps) =>
        `${props.borderWidth}px solid ${
            props.disabled ? Colors.SURFACE_DIM : props.isSelected ? Colors.SECONDARY : Colors.PRIMARY
        }`};
    border-radius: 50%;
    height: ${COMPONENT_CIRCLE_WIDTH}px;
    width: ${COMPONENT_CIRCLE_WIDTH}px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    position: relative;
`;

export const ComponentKind = styled.div`
    background-color: ${Colors.SURFACE};
    border-radius: 50%;

    height: ${COMPONENT_CIRCLE_WIDTH / 3}px;
    width: ${COMPONENT_CIRCLE_WIDTH / 3}px;

    position: relative;
    bottom: -16px;
    right: 44px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4px;
`;

interface ComponentNameStyleProps {
    disabled: boolean;
}
export const ComponentName = styled.span<ComponentNameStyleProps>`
    font-size: ${LABEL_FONT_SIZE}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    max-width: ${LABEL_MAX_WIDTH}px;
    color: ${(props: IconWrapperStyleProps) => (props.disabled ? Colors.SURFACE_DIM : Colors.OUTLINE)};
`;

interface IconWrapperStyleProps {
    previewMode: boolean;
    disabled: boolean;
}
export const IconWrapper = styled.div<IconWrapperStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    color: ${(props: IconWrapperStyleProps) => (props.disabled ? Colors.SURFACE_DIM : Colors.PRIMARY)};
    font-size: 32px;

    svg {
        fill: ${(props: IconWrapperStyleProps) => (props.disabled ? Colors.SURFACE_DIM : Colors.PRIMARY)};
        height: 32px;
        width: 32px;
        transform: ${(props: IconWrapperStyleProps) => (props.previewMode ? `scale(${ICON_SCALE.PREVIEW})` : "none")};
    }
`;

export const PortsContainer = styled.div`
    display: flex;
    justify-content: center;
`;
