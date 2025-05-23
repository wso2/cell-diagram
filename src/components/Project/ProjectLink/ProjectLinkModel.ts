/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { PROJECT_LINK } from "../../../resources";
import { SharedLinkModel } from "../../SharedLink/SharedLink";

interface LinkOrigins {
    nodeId: string;
}

export class ProjectLinkModel extends SharedLinkModel {
    sourceNode: LinkOrigins;
    targetNode: LinkOrigins;

    constructor(id: string) {
        super(id, PROJECT_LINK);
    }

    setSourceNode(nodeId: string) {
        this.sourceNode = { nodeId };
    }

    setTargetNode(nodeId: string) {
        this.targetNode = { nodeId };
    }
}
