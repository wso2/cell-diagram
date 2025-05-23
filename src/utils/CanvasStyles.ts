/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { createStyles, makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";

import { Colors, MAIN_CELL } from "../resources";

export const useStyles = makeStyles(() =>
    createStyles({
        canvas: {
            height: "100%",
            width: "100%",
        },
    })
);

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: "GilmerRegular";
    
    &.preview-mode {
        padding: 10px;
        background-image: radial-gradient(${Colors.SURFACE_CONTAINER} 10%, transparent 0px);
        background-size: 8px 8px;
        background-color: ${Colors.SURFACE_BRIGHT};
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer ;
        border: 1px solid ${Colors.SURFACE_CONTAINER};
    }
`;

export const DiagramContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(${Colors.SURFACE_CONTAINER} 10%, transparent 0px);
    background-size: 16px 16px;
    background-color: ${Colors.SURFACE_BRIGHT};
    svg:not(:root) {
        overflow: visible;
    }
    [data-nodeid="${MAIN_CELL}"] {
        pointer-events: none;
    }
    
    &.preview-mode {
        background-size: 8px 8px;
        padding: 5px;
        .cell-diagram-canvas {
            cursor: pointer ;
        }
    }
`;
