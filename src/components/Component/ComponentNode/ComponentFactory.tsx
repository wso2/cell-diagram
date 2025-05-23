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
import { ComponentModel } from './ComponentModel';
import { ComponentWidget } from './ComponentWidget';
import { COMPONENT_NODE } from '../../../resources';

export class ComponentFactory extends AbstractReactFactory<ComponentModel, DiagramEngine> {
    constructor() {
        super(COMPONENT_NODE);
    }

    generateReactWidget(event: { model: ComponentModel }): JSX.Element {
        return <ComponentWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event: { initialConfig: any }) {
        return new ComponentModel(event.initialConfig.component);
    }
}
