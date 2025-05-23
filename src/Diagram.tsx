/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { Container } from "./utils/CanvasStyles";
import { CustomTooltips, DiagramLayer, MoreVertMenuItem, Organization, Project } from "./types";
import "./resources/assets/font/fonts.css";
import { ProjectDiagram } from "./diagrams/ProjectDiagram";
import { PromptScreen } from "./components";
import { OrgDiagram } from "./diagrams/OrgDiagram";

export { DiagramLayer } from "./types";
export type { MoreVertMenuItem, Project } from "./types";

export interface CellDiagramProps {
    organization?: Organization;
    project?: Project;
    componentMenu?: MoreVertMenuItem[];
    showControls?: boolean;
    animation?: boolean;
    defaultDiagramLayer?: DiagramLayer;
    customTooltips?: CustomTooltips;
    modelVersion?: string; 
    previewMode?: boolean;
    onComponentDoubleClick?: (componentId: string) => void;
}

export function CellDiagram(props: CellDiagramProps) {
    const { organization, project, previewMode } = props;

    return (
        <Container className={previewMode ? "preview-mode" : ""}>
            {organization ? (
                <OrgDiagram organization={organization} {...props} />
            ) : project ? (
                <ProjectDiagram project={project} {...props} previewMode={previewMode} />
            ) : (
                <PromptScreen userMessage={"Organization or Project model not provided."} />
            )}
        </Container>
    );
}
