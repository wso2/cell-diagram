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

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "GilmerRegular";
`;

interface TooltipLabelProps {
    tooltip: string;
}

export function TooltipLabel(props: TooltipLabelProps) {
    const { tooltip } = props;

    return (
        <Section>
            <Row>{tooltip}</Row>
        </Section>
    );
}
