/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import * as React from "react";
import { DiagramEngine, PointModel } from "@projectstorm/react-diagrams-core";
import { ListenerHandle } from "@projectstorm/react-canvas-core";
import { AdvancedLinkModel } from "./AdvancedLinkModel";
import { AdvancedLinkPointWidget } from "./AdvancedLinkPointWidget";
import { AdvancedLinkSegmentWidget } from "./AdvancedLinkSegmentWidget";
import { MouseEvent } from "react";

export interface AdvancedLinkProps {
    link: AdvancedLinkModel;
    diagramEngine: DiagramEngine;
    pointAdded?: (point: PointModel, event: MouseEvent) => any;
    renderPoints?: boolean;
    selected?: (event: MouseEvent) => any;
}

export interface AdvancedLinkState {
    selected: boolean;
    listener?: ListenerHandle;
}

export class AdvancedLinkWidget extends React.Component<AdvancedLinkProps, AdvancedLinkState> {
    refPaths: React.RefObject<SVGPathElement>[];

    constructor(props: AdvancedLinkProps) {
        super(props);
        this.refPaths = [];
        this.state = {
            selected: false,
        };
    }

    renderPoints() {
        return this.props.renderPoints ?? true;
    }

    componentDidUpdate(): void {
        this.props.link.setRenderedPaths(
            this.refPaths.map((ref) => {
                return ref.current;
            })
        );
    }

    componentDidMount(): void {
        this.props.link.setRenderedPaths(
            this.refPaths.map((ref) => {
                return ref.current;
            })
        );
        const listener = this.props.link.registerListener({
            SELECT: this.selectPath,
            UNSELECT: this.unselectPath,
        });
        this.setState({ listener });
    }

    componentWillUnmount(): void {
        this.props.link.setRenderedPaths([]);
        if (this.state.listener) {
            this.props.link.deregisterListener(this.state.listener);
        }
    }

    selectPath = () => {
        this.setState({ selected: true });
    };

    unselectPath = () => {
        this.setState({ selected: false });
    };

    addPointToLink(event: MouseEvent, index: number) {
        if (
            !event.shiftKey &&
            !this.props.link.isLocked() &&
            this.props.link.getPoints().length - 1 <= this.props.diagramEngine.getMaxNumberPointsPerLink()
        ) {
            const position = this.props.diagramEngine.getRelativeMousePoint(event);
            const point = this.props.link.point(position.x, position.y, index);
            event.persist();
            event.stopPropagation();
            this.forceUpdate(() => {
                this.props.diagramEngine.getActionEventBus().fireAction({
                    event,
                    model: point,
                });
            });
        }
    }

    generatePoint(point: PointModel): JSX.Element {
        return (
            <AdvancedLinkPointWidget
                key={point.getID()}
                point={point as any}
                colorSelected={this.props.link.getOptions().selectedColor}
                color={this.props.link.getOptions().color}
            />
        );
    }

    generateLink(path: string, extraProps: any, id: string | number, showArrow?: boolean): JSX.Element {
        const ref = React.createRef<SVGPathElement>();
        this.refPaths.push(ref);
        return (
            <AdvancedLinkSegmentWidget
                key={`link-${id}`}
                path={path}
                selected={this.state.selected}
                diagramEngine={this.props.diagramEngine}
                factory={this.props.diagramEngine.getFactoryForLink(this.props.link)}
                link={this.props.link}
                forwardRef={ref}
                onSelection={(selected) => {
                    this.setState({ selected: selected });
                }}
                extras={extraProps}
                showArrow={showArrow}
            />
        );
    }

    render() {
        //ensure id is present for all points on the path
        let points = this.props.link.getPoints();
        let paths = [];
        this.refPaths = [];

        // draw curve line if the link is not a reverse link
        if (points.length === 2 || this.props.link.getFirstPoint().getX() < this.props.link.getLastPoint().getX()) {
            paths.push(
                this.generateLink(
                    this.props.link.getSVGPath(),
                    {
                        onMouseDown: (event: React.MouseEvent<Element, globalThis.MouseEvent>) => {
                            this.props.selected?.(event);
                        },
                    },
                    "0",
                    true
                )
            );

            // draw the link as dangeling
            if (this.props.link.getTargetPort() == null) {
                paths.push(this.generatePoint(points[1]));
            }
        } else {
            //draw the multiple anchors and complex line instead
            for (let j = 0; j < points.length - 1; j++) {
                paths.push(
                    this.generateLink(
                        this.props.link.getSVGPathSegment(points[j], points[j + 1]),
                        {
                            "data-linkid": this.props.link.getID(),
                            "data-point": j,
                            onMouseDown: (event: MouseEvent) => {
                                this.props.selected?.(event);
                                this.addPointToLink(event, j + 1);
                            },
                        },
                        j,
                        j === points.length - 2
                    )
                );
            }

            if (this.renderPoints()) {
                //render the circles
                for (let i = 1; i < points.length - 1; i++) {
                    paths.push(this.generatePoint(points[i]));
                }

                if (this.props.link.getTargetPort() == null) {
                    paths.push(this.generatePoint(points[points.length - 1]));
                }
            }
        }

        return (
            <g data-default-link-test={this.props.link.getOptions().testName}>
                {paths}
            </g>
        );
    }
}
