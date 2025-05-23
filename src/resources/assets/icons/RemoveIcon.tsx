/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function RemoveIcon(props: { styles?: CSSProperties }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ ...props.styles }}>
            <path fill="currentColor" d="M19 12.998H5v-2h14z" />
        </svg>
    );
}
