/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { ReactNode } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useStyles } from "./style";

interface ControlButtonProps {
    children: ReactNode;
    onClick: () => void;
    tooltipTitle: string;
    tooltipPlacement?: "left-end" | "right-end" | "top-start";
}

export function CanvasControlButton(props: ControlButtonProps) {
    const { children, onClick, tooltipTitle, tooltipPlacement = "left-end" } = props;
    const styles = useStyles();

    return (
        <Tooltip
            arrow
            placement={tooltipPlacement}
            title={tooltipTitle}
            enterNextDelay={200}
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
            <IconButton
                className={styles.controlButton}
                size="small"
                onClick={onClick}
                sx={{
                    cursor: "pointer",
                }}
            >
                {children}
            </IconButton>
        </Tooltip>
    );
}
