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
import { ReactNode } from "react";
import { Tooltip } from "@mui/material";

interface ButtonProps {
    selected?: boolean;
    clickable?: boolean;
}

const Button = styled.div<ButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    cursor: ${(props) => (props.clickable ? "pointer" : "not-allowed")};
    color: ${(props) => (props.selected ? Colors.PRIMARY : Colors.ON_SURFACE_VARIANT)};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    div {
        border: 1px solid ${(props) => (props.selected ? Colors.PRIMARY : Colors.SURFACE_DIM)};
        background-color: ${Colors.SURFACE};
        color: ${(props) => (props.selected ? Colors.PRIMARY : Colors.OUTLINE_VARIANT)};
    }
    &:hover {
        color: ${Colors.PRIMARY};
    }
    &:hover div {
        border: 1px solid ${Colors.PRIMARY};
        color: ${Colors.PRIMARY};
    }
`;

const TooltipContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 12px;
    font-weight: 600;
`;

const Description = styled.div`
    font-size: 12px;
`;

interface LayerButtonProps {
    children: ReactNode;
    selected?: boolean;
    clickable?: boolean;
    onClick: () => void;
    tooltipTitle?: string;
    tooltipDescription?: string;
    tooltipPlacement?: "left-end" | "right-end" | "top-start";
}

export function LayerButton(props: LayerButtonProps) {
    const { children, onClick, selected = false, clickable = true, tooltipTitle, tooltipDescription, tooltipPlacement = "top-start" } = props;

    return (
        <Tooltip
            arrow
            placement={tooltipPlacement}
            title={
                <>
                    {!tooltipDescription && <> {tooltipTitle} </>}
                    {tooltipDescription && (
                        <TooltipContainer>
                            <Title>{tooltipTitle}</Title>
                            <Description>{tooltipDescription}</Description>
                        </TooltipContainer>
                    )}
                </>
            }
            enterNextDelay={500}
            componentsProps={{
                tooltip: {
                    sx: {
                        fontFamily: "GilmerRegular",
                        fontSize: "12px",
                        padding: "6px 10px",
                    },
                },
            }}
            PopperProps={{
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, -10],
                        },
                    },
                ],
            }}
        >
            <Button onClick={onClick} selected={selected} clickable={clickable}>
                {children}
            </Button>
        </Tooltip>
    );
}
