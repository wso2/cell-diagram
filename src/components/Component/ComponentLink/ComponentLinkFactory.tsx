/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';
import { ComponentLinkModel } from './ComponentLinkModel';
import { ComponentLinkWidget } from './ComponentLinkWidget';

export class ComponentLinkFactory extends DefaultLinkFactory {
    constructor() {
        super('componentLink');
    }

    generateModel(event: { initialConfig: any }): ComponentLinkModel {
        return new ComponentLinkModel(event.initialConfig.id);
    }

    generateReactWidget(props: { model: ComponentLinkModel }): JSX.Element {
        return <ComponentLinkWidget link={props.model} engine={this.engine} />;
    }
}
