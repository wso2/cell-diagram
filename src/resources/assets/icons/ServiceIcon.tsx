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

export function ServiceIcon(props: { styles?: CSSProperties }) {
    return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ ...props.styles }}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.876.165a.25.25 0 0 1 .296-.146l1.022.279a.25.25 0 0 1 .181.276l-.127.893c.551.317.995.774 1.299 1.31l.895-.12a.25.25 0 0 1 .275.185l.27 1.024a.25.25 0 0 1-.15.295l-.836.336a3.501 3.501 0 0 1-.485 1.781l.55.715a.25.25 0 0 1-.022.33l-.751.745a.25.25 0 0 1-.33.02l-.711-.558a3.496 3.496 0 0 1-1.784.47l-.344.835a.25.25 0 0 1-.296.146l-1.022-.278a.25.25 0 0 1-.182-.277l.128-.893a3.496 3.496 0 0 1-1.299-1.31l-.895.12a.25.25 0 0 1-.275-.185l-.27-1.024a.25.25 0 0 1 .15-.295l.836-.336a3.504 3.504 0 0 1 .485-1.781l-.55-.715a.25.25 0 0 1 .022-.33l.751-.745a.25.25 0 0 1 .33-.02l.711.558A3.496 3.496 0 0 1 11.532 1l.344-.835Zm1.554 4.86a2 2 0 1 1-3.86-1.05a2 2 0 0 1 3.86 1.05ZM5.777 6.22A.25.25 0 0 0 5.53 6H4.471a.25.25 0 0 0-.248.219l-.11.88a3.977 3.977 0 0 0-1.244.515l-.7-.544a.25.25 0 0 0-.33.02l-.749.749a.25.25 0 0 0-.02.33l.544.7a3.977 3.977 0 0 0-.515 1.244l-.88.11A.25.25 0 0 0 0 10.47v1.058a.25.25 0 0 0 .219.248l.88.11c.101.448.278.867.515 1.244l-.544.7a.25.25 0 0 0 .02.33l.749.749a.25.25 0 0 0 .33.02l.7-.544c.377.237.796.414 1.244.515l.11.88a.25.25 0 0 0 .247.22h1.058a.25.25 0 0 0 .248-.219l.11-.88a3.974 3.974 0 0 0 1.244-.515l.7.544a.25.25 0 0 0 .33-.02l.749-.749a.25.25 0 0 0 .02-.33l-.544-.7c.237-.377.414-.796.515-1.244l.88-.11a.25.25 0 0 0 .22-.247v-1.058a.25.25 0 0 0-.219-.248l-.88-.11a3.977 3.977 0 0 0-.515-1.244l.544-.7a.25.25 0 0 0-.02-.33l-.75-.75a.25.25 0 0 0-.33-.02l-.7.544A3.977 3.977 0 0 0 5.887 7.1l-.11-.88ZM7.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
