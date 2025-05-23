/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { Colors } from "../../../resources";
import styled from "@emotion/styled";

interface PortNodeStyleProps {
    isSelected: boolean;
}
export const PortNode: React.FC<PortNodeStyleProps> = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    width: 10px;
    background-color: ${(props: PortNodeStyleProps) => (props.isSelected ? Colors.SECONDARY_CONTAINER : Colors.SURFACE_DIM)};
    border: 2px solid ${(props: PortNodeStyleProps) => (props.isSelected ? Colors.OUTLINE_VARIANT : Colors.OUTLINE)};
    border-radius: 50%;
    margin: -6px 0;
`;

export const TopPortNode: React.FC<PortNodeStyleProps> = styled(PortNode)`
    top: 0;
    margin: -6px 0;
    align-items: flex-start;
`;

export const BottomPortNode: React.FC<PortNodeStyleProps> = styled(PortNode)`
    bottom: 0;
    margin: -6px 0;
    align-items: flex-end;
`;

export const LeftPortNode: React.FC<PortNodeStyleProps> = styled(PortNode)`
    left: 0;
    margin: 0 -6px;
    justify-content: flex-start;
`;

export const RightPortNode: React.FC<PortNodeStyleProps> = styled(PortNode)`
    right: 0;
    margin: 0 -6px;
    justify-content: flex-end;
`;
