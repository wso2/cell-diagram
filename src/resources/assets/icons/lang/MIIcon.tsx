/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React, { CSSProperties } from "react";

export function MIIcon(props: { styles?: CSSProperties }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" style={{ ...props.styles }}>
            <g clipPath="url(#clip0_529_26847)">
                <path
                    d="M32.3593 23.3478L32.6959 23L32.3593 22.6522L17.1405 6.93027C15.2076 4.93347 12.0066 4.92987 10.0692 6.92232C8.21708 8.82714 8.20914 11.8576 10.0513 13.7721L14.1355 18.0167H0H-0.5V18.5167V27.4833V27.9833H0H14.1355L10.0513 32.2279C8.20914 34.1424 8.21708 37.1729 10.0692 39.0777C12.0066 41.0701 15.2076 41.0665 17.1405 39.0697L32.3593 23.3478Z"
                    fill="#F0F1F4"
                    stroke="#F0F1F4"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.0704 33.246L21.8518 38.7628C23.0645 39.5462 23.8368 40.8286 23.9901 42.2036C24.1133 43.2297 24.9217 44.0109 25.9244 44.0555C26.8225 44.0976 27.743 44.0776 28.6548 43.9843C29.7443 43.8847 30.5704 42.9542 30.6473 41.8598C30.7272 40.1703 31.714 38.5963 33.3313 37.8098C35.0644 36.9946 37.0227 37.3124 38.3975 38.4723C39.1771 39.138 40.3377 39.1341 41.1056 38.4632C41.8312 37.8122 42.4747 37.0966 43.0981 36.3387C43.775 35.5299 43.6653 34.3685 42.908 33.6407C41.6711 32.39 41.171 30.4571 41.8068 28.6869C42.4538 26.8856 44.0694 25.7127 45.8816 25.5572C46.9712 25.4577 47.8682 24.6228 47.9029 23.5483C47.9241 22.6092 47.9141 21.6589 47.7885 20.7372C47.6765 19.6801 46.7525 18.9274 45.6963 18.9339C43.8977 18.954 42.1536 17.9419 41.3353 16.2103C40.5169 14.4787 40.8552 12.4614 42.0152 11.0898C42.7344 10.2611 42.7514 9.04002 42.0164 8.25004C41.3836 7.56691 40.6974 6.93475 39.9577 6.35346C39.1359 5.70764 37.9309 5.83583 37.2029 6.59115C35.9407 7.85595 34.0057 8.35303 32.2012 7.7049C30.3967 7.05676 29.2202 5.44204 29.0624 3.63218C28.9615 2.54402 28.1443 1.6895 27.0571 1.68471C26.1167 1.66251 25.1849 1.71355 24.2621 1.83796C23.2036 1.94866 22.451 2.87049 22.4475 3.95616C22.4249 5.3193 21.8149 6.643 20.7411 7.53558C22.2083 9.10948 23.8436 10.8475 25.6229 12.7144C27.1264 12.5523 28.6882 12.7191 30.2046 13.2638C35.5561 15.1859 38.3502 21.0984 36.4316 26.4402C34.9661 30.5202 31.1677 33.1078 27.0704 33.246Z"
                    fill="url(#paint0_angular_529_26847)"
                />
                <path d="M27 23H0" stroke="#40404B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 16L27 23L20 30" stroke="#40404B" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <defs>
                <radialGradient
                    id="paint0_angular_529_26847"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.0787 22.9407) scale(31.6127 80.5262)"
                >
                    <stop stopColor="#C8D0FF" />
                    <stop offset="0.0001" stopColor="#B1BDFF" />
                    <stop offset="1" stopColor="#7E8FFA" />
                </radialGradient>
                <clipPath id="clip0_529_26847">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
