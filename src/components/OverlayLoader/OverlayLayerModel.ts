/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import {
    AbstractModelFactory, BaseModel, BaseModelGenerics, CanvasEngine, CanvasEngineListener,
    CanvasModel, CanvasModelGenerics, FactoryBank, FactoryBankListener, LayerModel, LayerModelGenerics
} from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';

export interface OverlayLayerModelGenerics extends LayerModelGenerics {
	ENGINE: DiagramEngine;
}

export class OverlayLayerModel<G extends OverlayLayerModelGenerics = OverlayLayerModelGenerics> extends LayerModel<G> {
    constructor() {
        super({
            type: 'diagram-overlays'
        });
    }

    getChildModelFactoryBank(_engine: G['ENGINE']): FactoryBank<AbstractModelFactory<BaseModel<BaseModelGenerics>, CanvasEngine<CanvasEngineListener, CanvasModel<CanvasModelGenerics>>>, FactoryBankListener<AbstractModelFactory<BaseModel<BaseModelGenerics>, CanvasEngine<CanvasEngineListener, CanvasModel<CanvasModelGenerics>>>>> {
        throw new Error('Method not implemented.');
    }
}
