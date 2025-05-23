/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { PortModelAlignment } from '@projectstorm/react-diagrams';

export function getOpposingPort(currentPortID: string, port: PortModelAlignment): string {
    if (port === PortModelAlignment.LEFT) {
        return currentPortID.replace(PortModelAlignment.RIGHT, PortModelAlignment.LEFT);
    } else if (port === PortModelAlignment.RIGHT) {
        return currentPortID.replace(PortModelAlignment.LEFT, PortModelAlignment.RIGHT);
    } else if (port === PortModelAlignment.TOP) {
        return currentPortID.replace(PortModelAlignment.BOTTOM, PortModelAlignment.TOP);
    } else {
        return currentPortID.replace(PortModelAlignment.TOP, PortModelAlignment.BOTTOM);
    }
}
