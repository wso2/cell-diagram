/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';
import { ConnectionModel } from './ConnectionModel';
import { ConnectionWidget } from './ConnectionWidget';
import { CONNECTION_NODE } from '../../../resources';

export class ConnectionFactory extends AbstractReactFactory<ConnectionModel, DiagramEngine> {
    constructor() {
        super(CONNECTION_NODE);
    }

    generateReactWidget(event: { model: ConnectionModel }): JSX.Element {
        return <ConnectionWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event: { initialConfig: any }) {
        return new ConnectionModel(event.initialConfig.connection);
    }
}
