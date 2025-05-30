/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { CSSProperties } from "react";

export function NodeJsIcon(props: { styles?: CSSProperties }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style={{ ...props.styles }}>
            <path
                fill="#83cd29"
                d="M16 30a2.151 2.151 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 0 0 1.549-.7a.263.263 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.323.323 0 0 0 .157-.278V10.075a.331.331 0 0 0-.159-.283l-10.26-5.917a.323.323 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.315.315 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 0 1-2.363-.642l-2.697-1.547a2.166 2.166 0 0 1-1.076-1.872V10.075A2.162 2.162 0 0 1 4.661 8.2l10.261-5.924a2.246 2.246 0 0 1 2.156 0L27.338 8.2a2.165 2.165 0 0 1 1.077 1.87v11.846a2.171 2.171 0 0 1-1.077 1.872l-10.26 5.924A2.152 2.152 0 0 1 16 30Z"
            />
            <path
                fill="#83cd29"
                d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784Z"
            />
        </svg>
    );
}
