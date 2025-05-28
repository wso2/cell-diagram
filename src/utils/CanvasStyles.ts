/*
 * Copyright (c) 2025, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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
