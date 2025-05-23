/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { EXTERNAL_LINK, EXTERNAL_NODE, NAME_JOIN_CHAR } from "../../resources";

export function getExternalNodeName(id: string): string {
    return `${EXTERNAL_NODE}${NAME_JOIN_CHAR}${id}`;
}

export function getExternalNodeMetadataByName(name: string): { type: string; id: string } {
    const parts = name.split(NAME_JOIN_CHAR);
    return { type: parts[0], id: parts[1] };
}

export function getExternalLinkName(source: string, target: string): string {
    return `${EXTERNAL_LINK}${NAME_JOIN_CHAR}${source}::${target}`;
}
