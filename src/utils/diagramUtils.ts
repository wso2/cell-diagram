/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
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

import createEngine, { DiagramEngine } from "@projectstorm/react-diagrams";
import {
    OverlayLayerFactory,
    ComponentFactory,
    ComponentLinkFactory,
    ComponentPortFactory,
    CellFactory,
    CellLinkFactory,
    CellPortFactory,
    EmptyFactory,
    ExternalFactory,
    ExternalLinkFactory,
    ConnectionPortFactory,
    ConnectionFactory,
    ProjectLinkFactory,
    ProjectPortFactory,
    ProjectFactory,
    DefaultLinkFactory,
} from "../components";
import {
    CELL_LINK,
    COMPONENT_LINK,
    COMPONENT_NODE,
    CONNECTION_NODE,
    EXTERNAL_LINK,
    MAIN_CELL,
    PROJECT_NODE,
} from "../resources";
import { ZoomCanvasAction } from "@projectstorm/react-canvas-core";
import { REVEAL_DURATION, RevealClass, RevealClassName } from "./animations";

// Diagram engine utils

export function generateEngine(previewMode?: boolean): DiagramEngine {
    const engine: DiagramEngine = createEngine({
        registerDefaultPanAndZoomCanvasAction: false,
        registerDefaultZoomCanvasAction: false,
    });
    engine.getLinkFactories().registerFactory(new ProjectLinkFactory());
    engine.getPortFactories().registerFactory(new ProjectPortFactory());
    engine.getNodeFactories().registerFactory(new ProjectFactory());
    engine.getLinkFactories().registerFactory(new DefaultLinkFactory());

    engine.getLinkFactories().registerFactory(new ComponentLinkFactory());
    engine.getPortFactories().registerFactory(new ComponentPortFactory());
    engine.getNodeFactories().registerFactory(new ComponentFactory());

    engine.getPortFactories().registerFactory(new ConnectionPortFactory());
    engine.getNodeFactories().registerFactory(new ConnectionFactory());

    engine.getLinkFactories().registerFactory(new CellLinkFactory());
    engine.getPortFactories().registerFactory(new CellPortFactory());
    engine.getNodeFactories().registerFactory(new CellFactory());

    engine.getLinkFactories().registerFactory(new ExternalLinkFactory());
    engine.getNodeFactories().registerFactory(new ExternalFactory());

    engine.getNodeFactories().registerFactory(new EmptyFactory());

    engine.getLayerFactories().registerFactory(new OverlayLayerFactory());

    if (!previewMode) {
        engine.getActionEventBus().registerAction(new ZoomCanvasAction({ inverseZoom: true }));
    }
    return engine;
}

// reveal diagram with animation
// Reveal animations use CSS keyframes (see ./animations).

// Adds `className` to every element matching `selector` and returns how many matched,
// so later steps are only delayed when something actually rendered.
export function revealElements(selector: string, className: RevealClassName, delaySeconds = 0, root: ParentNode = document): number {
    const elements = Array.from(root.querySelectorAll<HTMLElement | SVGElement>(selector));
    // re-adding a class in the same task does not restart the animation, so flush styles once in between
    elements.forEach((element) => element.classList.remove(className));
    if (elements.length > 0) {
        elements[0].getBoundingClientRect();
    }
    elements.forEach((element) => {
        element.style.animationDelay = delaySeconds > 0 ? `${delaySeconds}s` : "";
        element.classList.add(className);
    });
    return elements.length;
}

// reveal diagram with animation: the main cell scales in, then its contents fade in
export function animateProjectDiagram(root: ParentNode = document) {
    const cellCount = revealElements(`div[data-nodeid="${MAIN_CELL}"]`, RevealClass.SCALE, 0, root);
    const showNodeTime = cellCount > 0 ? REVEAL_DURATION : 0;
    [
        `g[data-linkid^="${EXTERNAL_LINK}|"]`,
        `div[data-nodeid^="${COMPONENT_NODE}|"]`,
        `div[data-nodeid^="${CONNECTION_NODE}|"]`,
        `g[data-linkid^="${COMPONENT_LINK}|"]`,
        `g[data-linkid^="${CELL_LINK}|"]`,
    ].forEach((selector) => revealElements(selector, RevealClass.FADE, showNodeTime, root));
}

// project nodes scale in, then their links fade in
export function animateOrgDiagram(root: ParentNode = document) {
    const nodeCount = revealElements(`div[data-nodeid^="${PROJECT_NODE}|"]`, RevealClass.SCALE_HALF, 0, root);
    revealElements(`g[data-default-link-test^="${PROJECT_NODE}|"]`, RevealClass.FADE, nodeCount > 0 ? REVEAL_DURATION : 0, root);
}
