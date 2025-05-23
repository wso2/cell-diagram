/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { DiagramEngine, PortModel } from '@projectstorm/react-diagrams';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import { ProjectPortModel } from './ProjectPortModel';

export class ProjectPortFactory extends AbstractModelFactory<PortModel, DiagramEngine> {
    constructor() {
        super('projectPort');
    }

    generateModel(event: { initialConfig: any }): ProjectPortModel {
        return new ProjectPortModel(event.initialConfig.id, event.initialConfig.portType);
    }
}
