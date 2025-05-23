/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */
import React from 'react';
import { AbstractReactFactory, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

import { OverlayLayerModel } from './OverlayLayerModel';
import { OverlayLayerWidget } from './OverlayLayerWidget';

export class OverlayLayerFactory extends AbstractReactFactory<OverlayLayerModel, DiagramEngine> {
    constructor() {
        super('diagram-overlays');
    }

    generateModel(): OverlayLayerModel {
        return new OverlayLayerModel();
    }

    generateReactWidget(event: GenerateWidgetEvent<OverlayLayerModel>): JSX.Element {
        return <OverlayLayerWidget layer={event.model} engine={this.engine} />;
    }
}
