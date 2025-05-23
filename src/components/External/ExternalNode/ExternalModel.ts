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
import { CellPortModel } from "../../Cell/CellPort/CellPortModel";
import { EXTERNAL_NODE } from "../../../resources";
import { getExternalNodeName } from "../external-node-util";

export class ExternalModel extends SharedNodeModel {
    constructor(id: string) {
        const name = getExternalNodeName(id);
        super(EXTERNAL_NODE, name);

        this.addPort(new CellPortModel(name, PortModelAlignment.LEFT));
        this.addPort(new CellPortModel(name, PortModelAlignment.RIGHT));
        this.addPort(new CellPortModel(name, PortModelAlignment.TOP));
        this.addPort(new CellPortModel(name, PortModelAlignment.BOTTOM));
    }
}
