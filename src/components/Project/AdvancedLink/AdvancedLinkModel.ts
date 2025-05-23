/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import {
    LabelModel,
    LinkModel,
    LinkModelListener,
    PointModel,
    PointModelGenerics,
    PortModel,
    PortModelAlignment,
} from "@projectstorm/react-diagrams-core";
import { BezierCurve } from "@projectstorm/geometry";
import { BaseEvent, BaseModelOptions, DeserializeEvent } from "@projectstorm/react-canvas-core";
import { Colors } from "../../../resources";
import { DefaultLabelModel, DefaultLinkModelGenerics } from "@projectstorm/react-diagrams-defaults";

export interface DefaultLinkModelListener extends LinkModelListener {
    colorChanged?(event: BaseEvent): void;
    widthChanged?(event: BaseEvent): void;
}

export interface AdvancedLinkModelOptions extends BaseModelOptions {
    width?: number;
    color?: string;
    selectedColor?: string;
    curvyness?: number;
    type?: string;
    testName?: string;
    receiver?: string;
}

export class AdvancedLinkModel extends LinkModel<DefaultLinkModelGenerics> {
    linkYOffset = 30;
    linkXOffset = 30;

    constructor(options: AdvancedLinkModelOptions = {}) {
        super({
            type: "default-2",
            width: options.width || 2,
            color: options.color || Colors.PRIMARY,
            selectedColor: options.selectedColor || Colors.SECONDARY,
            curvyness: 50,
            ...options,
        });
    }

    calculateControlOffset(port: PortModel): [number, number] {
        if (port.getOptions().alignment === PortModelAlignment.RIGHT) {
            return [this.options.curvyness, 0];
        } else if (port.getOptions().alignment === PortModelAlignment.LEFT) {
            return [-this.options.curvyness, 0];
        } else if (port.getOptions().alignment === PortModelAlignment.TOP) {
            return [0, -this.options.curvyness];
        }
        return [0, this.options.curvyness];
    }

    getSVGPath(): string {
        const curve = new BezierCurve();
        curve.setSource(this.getFirstPoint().getPosition());
        curve.setTarget(this.getLastPoint().getPosition());
        curve.setSourceControl(this.getFirstPoint().getPosition().clone());
        curve.setTargetControl(this.getLastPoint().getPosition().clone());

        if (this.sourcePort) {
            curve.getSourceControl().translate(...this.calculateControlOffset(this.getSourcePort()));
        }

        if (this.targetPort) {
            curve.getTargetControl().translate(...this.calculateControlOffset(this.getTargetPort()));
        }
        return curve.getSVGCurve();
    }

    getSVGPathSegment(firstPoint: PointModel, lastPoint: PointModel): string {
        // is first point connected to source node port
        let isStart =
            firstPoint.getPosition().x === this.sourcePort.getPosition().x &&
            firstPoint.getPosition().y === this.sourcePort.getPosition().y;
        // is last point connected to target node port
        let isEnd =
            lastPoint.getPosition().x === this.targetPort.getPosition().x &&
            lastPoint.getPosition().y === this.targetPort.getPosition().y;

        let source = firstPoint.getPosition();
        let target = lastPoint.getPosition();

        // is lines are straight?
        let tolerance = 4;
        let isStraight = Math.abs(source.y - target.y) <= tolerance || Math.abs(source.x - target.x) <= tolerance;
        if (isStraight) {
            let path = `M ${source.x} ${source.y} `;
            path += `L ${target.x} ${target.y}`;
            return path;
        }

        // generate 2 angle lines
        let curveOffset = 10 > Math.abs(source.y - target.y) / 2 ? Math.abs(source.y - target.y) / 2 : 10;
        // mid point in x axis
        let midX =
            Math.abs((source.x + target.x) / 2) > Math.abs(source.x + this.linkXOffset)
                ? (source.x + target.x) / 2
                : source.x + this.linkXOffset;
        // is the target on the right?
        let isRight = source.x < target.x;
        // is the target on the bottom?
        let isBottom = source.y < target.y;

        let path = `M ${source.x} ${source.y} `;
        if (isRight) {
            path += `L ${midX - curveOffset} ${source.y} `;
            if (isBottom) {
                path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX},${source.y + curveOffset} `;
                path += `L ${midX} ${target.y - curveOffset} `;
                path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX + curveOffset},${target.y} `;
            } else {
                path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX},${source.y - curveOffset} `;
                path += `L ${midX} ${target.y + curveOffset} `;
                path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX + curveOffset},${target.y} `;
            }
        } else {
            midX =
                Math.abs((source.x + target.x) / 2) > Math.abs(source.x - this.linkXOffset)
                    ? (source.x + target.x) / 2
                    : source.x - this.linkXOffset;

            if (isStart && this.sourcePort.getOptions().alignment === PortModelAlignment.RIGHT) {
                // start segment with curve
                midX = source.x + this.linkXOffset;
                path += `L ${midX - curveOffset} ${source.y} `;
                if (isBottom) {
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX},${source.y + curveOffset} `;
                    path += `L ${midX} ${target.y - curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX - curveOffset},${target.y} `;
                } else {
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX},${source.y - curveOffset} `;
                    path += `L ${midX} ${target.y + curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX - curveOffset},${target.y} `;
                }
            } else if (isEnd && this.targetPort.getOptions().alignment === PortModelAlignment.LEFT) {
                // start segment with curve
                midX = target.x - this.linkXOffset;
                path += `L ${midX} ${source.y} `;
                if (isBottom) {
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX - curveOffset},${source.y + curveOffset} `;
                    path += `L ${midX - curveOffset} ${target.y - curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX},${target.y} `;
                } else {
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX - curveOffset},${source.y - curveOffset} `;
                    path += `L ${midX - curveOffset} ${target.y + curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX},${target.y} `;
                }
            } else {
                // middle and last segments
                path += `L ${midX + curveOffset} ${source.y} `;
                if (isBottom) {
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX},${source.y + curveOffset} `;
                    path += `L ${midX} ${target.y - curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX - curveOffset},${target.y} `;
                } else {
                    path += `A ${curveOffset},${curveOffset} 0 0 1 ${midX},${source.y - curveOffset} `;
                    path += `L ${midX} ${target.y + curveOffset} `;
                    path += `A ${curveOffset},${curveOffset} 0 0 0 ${midX - curveOffset},${target.y} `;
                }
            }
        }

        path += `L ${target.x} ${target.y}`;
        return path;
    }

    calculateControlOffsetWithPosition(rightTraget: boolean, bottomTarget: boolean): [number, number] {
        if (rightTraget) {
            return [this.options.curvyness, 0];
        } else if (!rightTraget) {
            return [-this.options.curvyness, 0];
        } else if (!bottomTarget) {
            return [0, -this.options.curvyness];
        }
        return [0, this.options.curvyness];
    }

    serialize() {
        return {
            ...super.serialize(),
            width: this.options.width,
            color: this.options.color,
            curvyness: this.options.curvyness,
            selectedColor: this.options.selectedColor,
        };
    }

    deserialize(event: DeserializeEvent<this>) {
        super.deserialize(event);
        this.options.color = event.data.color;
        this.options.width = event.data.width;
        this.options.curvyness = event.data.curvyness;
        this.options.selectedColor = event.data.selectedColor;
    }

    addLabel(label: LabelModel | string) {
        if (label instanceof LabelModel) {
            return super.addLabel(label);
        }
        let labelOb = new DefaultLabelModel();
        labelOb.setLabel(label);
        return super.addLabel(labelOb);
    }

    setWidth(width: number) {
        this.options.width = width;
        this.fireEvent({ width }, "widthChanged");
    }

    setColor(color: string) {
        this.options.color = color;
        this.fireEvent({ color }, "colorChanged");
    }

    addPoint<P extends PointModel<PointModelGenerics>>(): P {
        return;
    }
}
