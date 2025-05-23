/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../resources";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(${Colors.SURFACE_CONTAINER} 10%, transparent 0px);
    background-size: 16px 16px;
    background-color: ${Colors.SURFACE_BRIGHT};
`;

const MassageBox = styled.h3`
    color: ${Colors.ON_SURFACE_VARIANT};
    font-family: GilmerRegular;
    font-size: 16px;
    padding: 10px;
`;

export interface PromptScreenProps {
    userMessage: string;
}

export function PromptScreen(props: PromptScreenProps) {
    const { userMessage } = props;

    return (
        <Container>
            <MassageBox>{userMessage}</MassageBox>
        </Container>
    );
}
