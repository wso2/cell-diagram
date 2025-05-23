/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import * as React from "react";
import { AdvancedLinkFactory } from "./AdvancedLinkFactory";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import { AdvancedLinkModel } from "./AdvancedLinkModel";

export interface AdvancedLinkSegmentWidgetProps {
    path: string;
    link: AdvancedLinkModel;
    selected: boolean;
    forwardRef: React.RefObject<SVGPathElement>;
    factory: AdvancedLinkFactory;
    diagramEngine: DiagramEngine;
    onSelection: (selected: boolean) => any;
    extras: object;
    showArrow?: boolean;
}

export class AdvancedLinkSegmentWidget extends React.Component<AdvancedLinkSegmentWidgetProps> {
    render() {
        const Bottom = React.cloneElement(
            this.props.factory.generateLinkSegment(
                this.props.link,
                this.props.selected,
                this.props.path,
                this.props.showArrow
            ),
            {
                ref: this.props.forwardRef,
            }
        );

        const Top = React.cloneElement(Bottom, {
            strokeLinecap: "round",
            onMouseLeave: () => {
                this.props.onSelection(false);
            },
            onMouseEnter: () => {
                this.props.onSelection(true);
            },
            ...this.props.extras,
            ref: null,
            "data-linkid": this.props.link.getID(),
            strokeOpacity: this.props.selected ? 0.1 : 0,
            strokeWidth: 20,
            fill: "none",
            onContextMenu: () => {
                if (!this.props.link.isLocked()) {
                    event.preventDefault();
                    this.props.link.remove();
                }
            },
        });

        return (
            <g>
                {Bottom}
                {Top}
            </g>
        );
    }
}
