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
import { CellModel } from './CellModel';
import { CellWidget } from './CellWidget';

export class CellFactory extends AbstractReactFactory<CellModel, DiagramEngine> {
    constructor() {
        super('cellNode');
    }

    generateReactWidget(event: { model: CellModel }): JSX.Element {
        return <CellWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event: { initialConfig: any }) {
        return new CellModel(event.initialConfig.key, event.initialConfig.cell);
    }
}
