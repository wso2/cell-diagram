/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import styled from "@emotion/styled";

interface StyleProps {
    width: number;
    previewMode: boolean;
}

export const EmptyNode: React.FC<any> = styled.div`
    width: ${(props: StyleProps) => props.width}px;
    height: ${(props: StyleProps) => props.width}px;
    border-radius: 50%;
    background-color: none;
    cursor: ${(props: StyleProps) => props.previewMode ? "pointer" : "move"};
`;
