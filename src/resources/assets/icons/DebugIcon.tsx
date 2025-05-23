/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function DebugIcon(props: { styles?: CSSProperties }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
             <path
                fill="currentColor"
                fillRule="nonzero"
                d="M6.5 0c1.682 0 3.168.943 4.17 2.424l1.018-.588a.525.525 0 0 1 .702.072.443.443 0 0 1-.013.598l-.065.058-1.168.675a8.36 8.36 0 0 1 .844 3.294h.512a.5.5 0 0 1 .09.992l-.09.008h-.516c-.074 1.265-.412 2.44-.946 3.433l1.274.736.065.059a.443.443 0 0 1 .013.597.525.525 0 0 1-.702.073l-1.152-.665C9.538 13.137 8.109 14 6.5 14c-1.61 0-3.038-.863-4.036-2.234l-1.152.665a.525.525 0 0 1-.702-.073.443.443 0 0 1 .013-.597l.065-.059 1.274-.736c-.534-.992-.872-2.168-.946-3.432H.5a.5.5 0 0 1-.09-.993l.09-.008h.512a8.36 8.36 0 0 1 .844-3.294L.688 2.564l-.065-.058a.443.443 0 0 1-.013-.598.525.525 0 0 1 .702-.072l1.019.588C3.332.943 4.818 0 6.5 0Zm4.401 5.733H2.1A8.088 8.088 0 0 0 2 7c0 3.378 2.058 6.067 4.5 6.067S11 10.377 11 7c0-.435-.034-.859-.099-1.267ZM6.5.933c-1.861 0-3.499 1.562-4.173 3.8h8.346C9.999 2.495 8.361.933 6.5.933Z"
            />
        </svg>
    );
}
