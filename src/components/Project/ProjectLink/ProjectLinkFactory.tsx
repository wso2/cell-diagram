/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';
import { ProjectLinkModel } from './ProjectLinkModel';
import { ProjectLinkWidget } from './ProjectLinkWidget';
import { PROJECT_LINK } from '../../../resources';

export class ProjectLinkFactory extends DefaultLinkFactory {
    constructor() {
        super(PROJECT_LINK);
    }

    generateModel(event: { initialConfig: any }): ProjectLinkModel {
        return new ProjectLinkModel(event.initialConfig.id);
    }

    generateReactWidget(props: { model: ProjectLinkModel }): JSX.Element {
        return <ProjectLinkWidget link={props.model} engine={this.engine} />;
    }
}
