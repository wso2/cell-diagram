/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function AddCheckIcon(props: { styles?: CSSProperties }) {
    return (
        <svg viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg" style={{ ...props.styles }}>
            <path
                fill="currentColor"
                d="M1859 1758q14 23 21 47t7 51q0 40-15 75t-41 61t-61 41t-75 15H354q-40 0-75-15t-61-41t-41-61t-15-75q0-27 6-51t21-47l569-992q10-14 10-34V128H640V0h768v128h-128v604q0 19 10 35l569 991zM896 732q0 53-27 99l-331 577h972l-331-577q-27-46-27-99V128H896v604z"
            />
        </svg>
    );
}
