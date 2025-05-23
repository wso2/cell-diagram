/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { DiagramEngine, PortModel } from '@projectstorm/react-diagrams';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import { ConnectionPortModel } from './ConnectionPortModel';

export class ConnectionPortFactory extends AbstractModelFactory<PortModel, DiagramEngine> {
    constructor() {
        super('connectionPort');
    }

    generateModel(event: { initialConfig: any }): ConnectionPortModel {
        return new ConnectionPortModel(event.initialConfig.id, event.initialConfig.portType);
    }
}
