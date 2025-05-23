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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Colors } from "../../resources";
import { Component } from "../../types";
import { MoreVertMenuItem } from "../../types";

const IconStyles = styled.button`
    position: absolute;
    background-color: ${Colors.SURFACE};
    margin-left: 68px;
    margin-bottom: 58px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0;
    border: 3px solid ${Colors.SURFACE_DIM};
    transition: "transform 0.3s ease-in-out";
    cursor: pointer;
`;

interface MoreVertMenuProps {
    component: Component;
    menuItems: MoreVertMenuItem[];
    hasComponentKind?: boolean;
    onClose?: () => void;
}

export function MoreVertMenu(props: MoreVertMenuProps) {
    const { component, menuItems, onClose } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const menuId = "menu-" + component.id;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        onClose && onClose();
    };

    return (
        <>
            <IconStyles
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MoreVertIcon />
            </IconStyles>

            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={`menu-item ${item.label}`} onClick={() => {
                        item.callback(component.id, component.version);
                        handleClose();
                    }}>{item.label}</MenuItem>
                ))}
            </Menu>
        </>
    );
}
