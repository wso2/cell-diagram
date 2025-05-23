/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { PortModelAlignment } from "@projectstorm/react-diagrams";
import { SharedNodeModel } from "../../SharedNode/SharedNode";
import { ComponentPortModel } from "../ComponentPort/ComponentPortModel";
import { Component, ComponentType } from "../../../types";
import { COMPONENT_NODE } from "../../../resources";
import { getComponentName } from "../component-node-util";

export class ComponentModel extends SharedNodeModel {
    readonly component: Component;

    constructor(component: Component) {
        const name = getComponentName(component);
        super(COMPONENT_NODE, name);
        this.component = component;

        this.addPort(new ComponentPortModel(name, PortModelAlignment.LEFT));
        this.addPort(new ComponentPortModel(name, PortModelAlignment.RIGHT));

        this.addPort(new ComponentPortModel(name, PortModelAlignment.TOP));
        this.addPort(new ComponentPortModel(name, PortModelAlignment.BOTTOM));
    }

    isExternalConsumer(): boolean {
        return this.component.type === ComponentType.EXTERNAL_CONSUMER;
    }
}
