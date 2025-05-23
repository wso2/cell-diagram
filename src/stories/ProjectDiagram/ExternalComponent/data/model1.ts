/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */
import { Project } from "../../../../types";

export const model1: Project = {
    id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
    name: "A",
    components: [
        {
            id: "Users",
            version: "0.1.0",
            type: "service",
            services: {
                "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Users:users": {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Users:users",
                    label: "users",
                    type: "http",
                    dependencyIds: ["ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Users:svc2Basepath"],
                    deploymentMetadata: {
                        gateways: {
                            internet: {
                                isExposed: false,
                            },
                            intranet: {
                                isExposed: true,
                            },
                        },
                    },
                },
            },
            connections: [
                {
                    id: "mysql://mysql",
                    type: "datastore",
                    onPlatform: true,
                },
                {
                    id: "salesforce://salesforceCorporate",
                    type: "connector",
                    onPlatform: false,
                },
            ],
        },
        {
            id: "SocialMediaAutomation",
            version: "0.1.1",
            type: "external-consumer",
            connections: [
                {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Users:myconid_users",
                    type: "http",
                },
                {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Offers:myconid_basepath",
                    type: "http",
                },
            ],
        },
        {
            id: "SocialMediaAutomation2",
            version: "0.1.1",
            type: "external-consumer",
            connections: [
                {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Users:myconid_users",
                    type: "http",
                },
                {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Offers:myconid_basepath",
                    type: "http",
                },
            ],
        },
        {
            id: "Offers",
            version: "0.2.0",
            type: "service",
            services: {
                "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Offers:basepath": {
                    id: "ABC:110ec58a-a0f2-4ac4-8393-c866d813b8d1:Offers:basepath",
                    label: "basepath",
                    type: "http",
                    dependencyIds: [],
                    deploymentMetadata: {
                        gateways: {
                            internet: {
                                isExposed: true,
                            },
                            intranet: {
                                isExposed: true,
                            },
                        },
                    },
                },
            },
            connections: [
                {
                    id: "firebase://firebase",
                    type: "datastore",
                    onPlatform: false,
                },
            ],
        },
    ],
    modelVersion: "0.4.0",
};