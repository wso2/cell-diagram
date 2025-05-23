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
import { ConnectionPortModel } from "../ConnectionPort/ConnectionPortModel";
import { Connection } from "../../../types";
import { CONNECTION_NODE } from "../../../resources";
import { getConnectionName } from "../connection-node-util";

export enum Orientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
}

export class ConnectionModel extends SharedNodeModel {
    readonly connection: Connection;
    readonly orientation: Orientation;

    constructor(connection: Connection, orientation?: Orientation) {
        const name = getConnectionName(connection);
        super(CONNECTION_NODE, name);
        this.connection = connection;
        this.orientation = orientation || Orientation.VERTICAL;

        this.addPort(new ConnectionPortModel(name, PortModelAlignment.TOP));
        this.addPort(new ConnectionPortModel(name, PortModelAlignment.BOTTOM));

        this.addPort(new ConnectionPortModel(name, PortModelAlignment.LEFT));
        this.addPort(new ConnectionPortModel(name, PortModelAlignment.RIGHT));
    }
}
