/*
 * Copyright (c) 2026, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
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

import { css, keyframes } from "@emotion/react";

// CSS keyframe animations for the diagram reveal and the canvas control panels.
// Elements opt in through class names, so the browser runs them natively.

// cubic ease-out (gsap "power3.out")
const EASE_OUT_CUBIC = "cubic-bezier(0.215, 0.61, 0.355, 1)";
// quadratic ease-out (gsap default "power1.out")
const EASE_OUT_QUAD = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

// seconds
export const REVEAL_DURATION = 0.5;
const PANEL_DURATION = 1;
const PANEL_DELAY = 1;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const scaleIn = keyframes`
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
`;

const scaleInHalf = keyframes`
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
`;

const popIn = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const RevealClass = {
    FADE: "cell-diagram-reveal-fade",
    SCALE: "cell-diagram-reveal-scale",
    SCALE_HALF: "cell-diagram-reveal-scale-half",
} as const;

export type RevealClassName = (typeof RevealClass)[keyof typeof RevealClass];

export const PANEL_REVEAL_CLASS = "cell-diagram-panel-reveal";

// Included once in the diagram container. `backwards` fill keeps elements hidden during their delay.
export const revealStyles = css`
    .${RevealClass.FADE} {
        animation: ${fadeIn} ${REVEAL_DURATION}s ${EASE_OUT_QUAD} backwards;
    }
    .${RevealClass.SCALE} {
        animation: ${scaleIn} ${REVEAL_DURATION}s ${EASE_OUT_QUAD} backwards;
    }
    .${RevealClass.SCALE_HALF} {
        animation: ${scaleInHalf} ${REVEAL_DURATION}s ${EASE_OUT_QUAD} backwards;
    }
`;

// Included by each control panel.
export const panelRevealStyles = css`
    &.${PANEL_REVEAL_CLASS} {
        animation: ${popIn} ${PANEL_DURATION}s ${EASE_OUT_CUBIC} ${PANEL_DELAY}s backwards;
    }
`;
