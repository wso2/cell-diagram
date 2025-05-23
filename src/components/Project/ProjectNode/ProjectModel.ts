/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { PortModelAlignment } from "@projectstorm/react-diagrams";
import { SharedNodeModel } from "../../SharedNode/SharedNode";
import { ProjectPortModel } from "../ProjectPort/ProjectPortModel";
import { Project } from "../../../types";
import { PROJECT_NODE } from "../../../resources";
import { getProjectNameById } from "../../../utils";

export class ProjectModel extends SharedNodeModel {
    readonly project: Project;

    constructor(project: Project) {
        const name = getProjectNameById(project.id);
        super(PROJECT_NODE, name);
        this.project = project;
        // this.setLocked(true);

        this.addPort(new ProjectPortModel(name, PortModelAlignment.LEFT));
        this.addPort(new ProjectPortModel(name, PortModelAlignment.RIGHT));

        this.addPort(new ProjectPortModel(name, PortModelAlignment.TOP));
        this.addPort(new ProjectPortModel(name, PortModelAlignment.BOTTOM));
    }

    getPort(name: string): ProjectPortModel {
        return this.getPorts()[name] as ProjectPortModel;
    }
}
