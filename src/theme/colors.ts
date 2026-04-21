/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * The full color vocabulary the cell diagram paints with.
 *
 * The shape mirrors a Material You-style token system. `lightColors` is the
 * historical default and matches the original `Colors` enum byte-for-byte;
 * `darkColors` is the dark-mode counterpart. Host applications can also
 * override individual tokens by passing a `colors` prop to `<CellDiagram>`.
 */
export type CellDiagramColors = {
    PRIMARY: string;
    ON_PRIMARY: string;
    PRIMARY_CONTAINER: string;
    /** Hover accent for primary-tinted clickable surfaces (e.g. project node title). */
    PRIMARY_HOVER: string;

    SECONDARY: string;
    ON_SECONDARY: string;
    SECONDARY_CONTAINER: string;

    SURFACE_BRIGHT: string;
    SURFACE: string;
    SURFACE_DIM: string;
    SURFACE_CONTAINER: string;
    ON_SURFACE: string;
    ON_SURFACE_VARIANT: string;

    OUTLINE: string;
    OUTLINE_VARIANT: string;

    ERROR: string;
};

/** Default light palette — byte-identical to the original `Colors` enum. */
export const lightColors: Readonly<CellDiagramColors> = Object.freeze({
    PRIMARY: '#5567D5',
    ON_PRIMARY: '#FFF',
    PRIMARY_CONTAINER: '#F0F1FB',
    PRIMARY_HOVER: '#2c09ed',

    SECONDARY: '#ffaf4d',
    ON_SECONDARY: '#FFF',
    SECONDARY_CONTAINER: '#fffaf2',

    SURFACE_BRIGHT: '#FFF',
    SURFACE: '#F7F8FB',
    SURFACE_DIM: '#CBCEDB',
    SURFACE_CONTAINER: '#cfd1f3',
    ON_SURFACE: '#000',
    ON_SURFACE_VARIANT: '#40404B',

    OUTLINE: '#393939',
    OUTLINE_VARIANT: '#808080',

    ERROR: '#ED2633',
});

/**
 * Dark palette. Brand accents (PRIMARY, SECONDARY, ERROR) are kept identical
 * to the light palette so link strokes and status indicators remain
 * recognizable; surfaces, outlines, and on-surface text invert.
 */
export const darkColors: Readonly<CellDiagramColors> = Object.freeze({
    PRIMARY: '#5567D5',
    ON_PRIMARY: '#FFF',
    PRIMARY_CONTAINER: '#2A2F55',
    PRIMARY_HOVER: '#8FA0EA',

    SECONDARY: '#ffaf4d',
    ON_SECONDARY: '#FFF',
    SECONDARY_CONTAINER: '#3A2A10',

    SURFACE_BRIGHT: '#25252B',
    SURFACE: '#1B1B1F',
    SURFACE_DIM: '#141418',
    SURFACE_CONTAINER: '#2E2F3A',
    ON_SURFACE: '#E6E6EC',
    ON_SURFACE_VARIANT: '#B5B5C0',

    OUTLINE: '#C7C7D1',
    OUTLINE_VARIANT: '#5A5A66',

    ERROR: '#ED2633',
});

export type CellDiagramThemeMode = 'light' | 'dark';

/** Resolves the preset palette for a mode. */
export function presetForMode(mode: CellDiagramThemeMode): Readonly<CellDiagramColors> {
    return mode === 'dark' ? darkColors : lightColors;
}
