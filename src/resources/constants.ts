/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */


export enum Colors {    
    PRIMARY = '#5567D5',
    ON_PRIMARY = '#FFF',
    PRIMARY_CONTAINER = '#F0F1FB',
    
    SECONDARY = '#ffaf4d',
    ON_SECONDARY = '#FFF',
    SECONDARY_CONTAINER = '#fffaf2', 
    
    SURFACE_BRIGHT = '#FFF',
    SURFACE = '#F7F8FB',
    SURFACE_DIM = '#CBCEDB',
    SURFACE_CONTAINER = "#cfd1f3",
    ON_SURFACE = '#000',
    ON_SURFACE_VARIANT = '#40404B',

    OUTLINE = '#393939',
    OUTLINE_VARIANT = '#808080',

    ERROR = '#ED2633',
}

export const LINK_WIDTH = {
    DEFAULT: 2,
    PREVIEW: 4,
}

export const ICON_SCALE = {
    DEFAULT: 1,
    PREVIEW: 1.5,
}

export const MARGIN = {
    DEFAULT: 40,
    PREVIEW: 0,
}

export const NAME_JOIN_CHAR = "|";

// error messages
export const NO_ENTITIES_DETECTED = 'Could not detect any components in the project.';
export const ERRONEOUS_MODEL = 'Please resolve the diagnostics to view the cell diagram.';
export const NO_CELL_NODE = 'Could not detect cell.';

// node types
export const PROJECT_NODE = "projectNode";
export const COMPONENT_NODE = "componentNode";
export const CONNECTION_NODE = "connectionNode";
export const MAIN_CELL = "mainCell";
export const EMPTY_NODE = "emptyNode";
export const EXTERNAL_NODE = "externalNode";
export const BORDER_NODE = "borderNode";

// link types
export const PROJECT_LINK = "projectLink";
export const COMPONENT_LINK = "componentLink";
export const CONNECTION_LINK = "connectionLink";
export const CELL_LINK = "cellLink";
export const EXTERNAL_LINK = "externalLink";

// node dimensions
export const MAIN_CELL_DEFAULT_HEIGHT = 500;
export const CELL_LINE_MIN_WIDTH = 3;
export const CELL_LINE_PREVIEW_WIDTH = 2;
export const CIRCLE_WIDTH = 60;
export const DOT_WIDTH = 20;

export const COMPONENT_CIRCLE_WIDTH = 80;
export const COMPONENT_LINE_MIN_WIDTH = 3;
export const COMPONENT_LINE_PREVIEW_WIDTH = 2;

export const LINE_MIN_WIDTH = 2;
export const LINE_MAX_WIDTH = 10;

export const LABEL_FONT_SIZE = 20;
export const LABEL_MAX_WIDTH = 200;

export const BORDER_GAP = 40;
export const DIAGRAM_END = 1000;
