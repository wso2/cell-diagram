/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { render } from "react-dom";
import { CellDiagram } from "./Diagram";
import { Project } from "./types";

export { CellDiagram } from "./Diagram";
export * from "./types";

export function renderDiagram(projectModel: string, target: HTMLDivElement) {
    const project: Project = JSON.parse(JSON.stringify(projectModel));
    render(<CellDiagram project={project} />, target);
}
