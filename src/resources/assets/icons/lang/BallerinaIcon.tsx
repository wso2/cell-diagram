/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function BallerinaIcon(props: { styles?: CSSProperties }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style={{ ...props.styles }}>
            <path
                fill="#20b4ae"
                d="M8 9.859V2h6.818v10.376Zm0 2.461l4.666 1.723L8 15.764Zm6.818 3.389v3.805L11.5 30H8V18.225ZM24 9.859V2h-6.819v10.376Zm0 2.461l-4.668 1.723L24 15.764Zm-6.819 3.389v3.805L20.5 30H24V18.225Z"
            />
        </svg>
    );
}
