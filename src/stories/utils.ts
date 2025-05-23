/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import styled from "@emotion/styled";
import { action } from "@storybook/addon-actions";

export const Container = styled.div`
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
    height: 100svh;
    width: 100svw;
`;

export const PreviewContainer = styled.div`
    height: 250px;
    width: 250px;
`;

export const componentMenu: MenuItem[] = [
    { label: "Go to source", callback: (...args) => action("Go to source menu item clicked")(...args) },
    { label: "Observe", callback: (...args) => action("Observe menu item clicked")(...args) },
];

export const handleComponentDoubleClick = (componentId: string) => {
    action("component double clicked")(componentId);
};
