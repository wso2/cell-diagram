/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function DiagramIcon(props: { styles?: CSSProperties }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ ...props.styles }}>
            <path
                fill="currentColor"
                d="M19 9q-1.425 0-2.475-.85T15.125 6H8.85q-.275 1.05-1.037 1.813T6 8.85v6.275q1.3.35 2.15 1.4T9 19q0 1.65-1.175 2.825T5 23q-1.65 0-2.825-1.175T1 19q0-1.425.85-2.475t2.15-1.4V8.85q-1.3-.35-2.15-1.4T1 5q0-1.65 1.175-2.825T5 1q1.4 0 2.45.85T8.85 4h6.275q.35-1.3 1.4-2.15T19 1q1.65 0 2.825 1.175T23 5q0 1.65-1.175 2.825T19 9ZM5 21q.825 0 1.413-.6T7 19q0-.825-.587-1.412T5 17q-.8 0-1.4.588T3 19q0 .8.6 1.4T5 21ZM5 7q.825 0 1.413-.587T7 5q0-.825-.587-1.412T5 3q-.8 0-1.4.588T3 5q0 .825.6 1.413T5 7Zm14 16q-1.65 0-2.825-1.175T15 19q0-1.65 1.175-2.825T19 15q1.65 0 2.825 1.175T23 19q0 1.65-1.175 2.825T19 23Zm0-2q.825 0 1.413-.6T21 19q0-.825-.587-1.412T19 17q-.825 0-1.412.588T17 19q0 .8.588 1.4T19 21Zm0-14q.825 0 1.413-.587T21 5q0-.825-.587-1.412T19 3q-.825 0-1.412.588T17 5q0 .825.588 1.413T19 7ZM5 19ZM5 5Zm14 14Zm0-14Z"
            />
        </svg>
    );
}
