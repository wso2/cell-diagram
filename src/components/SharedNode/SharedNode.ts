/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { LinkModel, NodeModel, NodeModelGenerics, PortModel } from '@projectstorm/react-diagrams';
import { ComponentLinkModel } from '../Component/ComponentLink/ComponentLinkModel';
import { LINE_MAX_WIDTH, LINE_MIN_WIDTH } from "../../resources";

export class SharedNodeModel extends NodeModel<NodeModelGenerics> {
    constructor(type: string, id: string) {
        super({
            type: type,
            id: id,
        });
    }

    handleHover = (ports: PortModel[], task: string) => {
        if (ports.length > 0) {
            ports.forEach((port) => {
                const portLinks: Map<string, LinkModel> = new Map(Object.entries(port.links));
                portLinks.forEach((link) => {
                    if (link.getSourcePort().getID() === port.getID()) {
                        link.fireEvent({}, task);
                    }
                });
            });
        }
    };

    isNodeSelected = (selectedLink: ComponentLinkModel, portIdentifier: string): boolean => {
        if (selectedLink) {
            if (selectedLink.getSourcePort().getNode().getID() === this.getID()) {
                const sourcePortID: string = selectedLink.getSourcePort().getID();
                return sourcePortID.slice(sourcePortID.indexOf("-") + 1) === portIdentifier;
            } else if (selectedLink.getTargetPort().getNode().getID() === this.getID()) {
                const targetPortID: string = selectedLink.getTargetPort().getID();
                return targetPortID.slice(targetPortID.indexOf("-") + 1) === portIdentifier;
            }
        }
        return false;
    };

    getDynamicLineWidth = (zoomLevel: number, minWidth = LINE_MIN_WIDTH, maxWidth = LINE_MAX_WIDTH): number => {
        return Math.min(Math.max(minWidth, 100 / zoomLevel), maxWidth);
    };
}
