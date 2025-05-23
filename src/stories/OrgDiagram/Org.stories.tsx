/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import { CellDiagram } from "../../Diagram";
import { Organization } from "../../types";
import { Container, handleComponentDoubleClick } from "../utils";
import { CellBounds } from "../../components/Cell/CellNode/CellModel";
import wso2OrgModel from "./wso2-org-model.json";
import yOrgModel from "./y-org-model.json";
import kOrgModel from "./k-org-model.json";

const noProjectsOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [],
    modelVersion: "0.4.0",
};

const singleProjectOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [
        {
            id: "1234",
            name: "Project A",
            components: [],
        },
    ],
    modelVersion: "0.4.0",
};

const simpleOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [
        {
            id: "1234",
            name: "Project A",
            components: [],
            connections: [
                {
                    id: "1234-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "1234-9012",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "9012",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
        {
            id: "5678",
            name: "Project B",
            components: [],
        },
        {
            id: "9012",
            name: "Project C",
            components: [],
            connections: [
                {
                    id: "9012-3456",
                    source: {
                        boundary: CellBounds.SouthBound,
                    },
                    target: {
                        id: "github",
                        label: "GitHub",
                    },
                },
            ],
        },
        {
            id: "3456",
            name: "Project D",
            components: [],
        },
    ],
    modelVersion: "0.4.0",
};

const simpleNoLinkOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [
        {
            id: "1234",
            name: "Project A",
            components: [],
            connections: [],
        },
        {
            id: "5678",
            name: "Project B",
            components: [],
        },
        {
            id: "9012",
            name: "Project C",
            components: [],
            connections: [
                {
                    id: "9012-3456",
                    source: {
                        boundary: CellBounds.SouthBound,
                    },
                    target: {
                        id: "github",
                        label: "GitHub",
                    },
                },
            ],
        },
        {
            id: "3456",
            name: "Project D",
            components: [],
        },
    ],
    modelVersion: "0.4.0",
};

const multiProjectsOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [
        {
            id: "1234",
            name: "Project A",
            components: [],
            connections: [
                {
                    id: "1234-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "1234-9012",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "9012",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "1234-N",
                    source: {
                        boundary: CellBounds.NorthBound,
                    },
                },
            ],
        },
        {
            id: "5678",
            name: "Project B",
            components: [],
        },
        {
            id: "9012",
            name: "Project C",
            components: [],
            connections: [
                {
                    id: "9012-3456",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "3456",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
        {
            id: "3456",
            name: "Project D",
            components: [],
            connections: [
                {
                    id: "3456-7890",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "7890",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "3456-N",
                    source: {
                        boundary: CellBounds.NorthBound,
                    },
                },
                {
                    id: "3456-github",
                    source: {
                        boundary: CellBounds.SouthBound,
                    },
                    target: {
                        id: "github",
                        label: "GitHub",
                    },
                },
            ],
        },
        {
            id: "7890",
            name: "Project E",
            components: [],
            connections: [
                {
                    id: "7890-1234",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "1234",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "7890-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
    ],
    modelVersion: "0.4.0",
};

const complexOrgModel: Organization = {
    id: "A",
    name: "A",
    projects: [
        {
            id: "1234",
            name: "Project A",
            components: [],
            connections: [
                {
                    id: "1234-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "1234-9012",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "9012",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "1234-3456",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "3456",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "3456-github",
                    source: {
                        boundary: CellBounds.SouthBound,
                    },
                    target: {
                        id: "github",
                        label: "GitHub",
                    },
                },
            ],
        },
        {
            id: "5678",
            name: "Project B",
            components: [],
        },
        {
            id: "9012",
            name: "Project C",
            components: [],
            connections: [
                {
                    id: "9012-3456",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "3456",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "9012-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "9012-7890",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "7890",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
        {
            id: "3456",
            name: "Project D",
            components: [],
            connections: [
                {
                    id: "3456-7890",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "7890",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "3456-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
        {
            id: "7890",
            name: "Project E",
            components: [],
            connections: [
                {
                    id: "7890-1234",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "1234",
                        boundary: CellBounds.WestBound,
                    },
                },
                {
                    id: "7890-5678",
                    source: {
                        boundary: CellBounds.EastBound,
                    },
                    target: {
                        projectId: "5678",
                        boundary: CellBounds.WestBound,
                    },
                },
            ],
        },
    ],
    modelVersion: "0.4.0",
};

storiesOf("Org", module).add("Empty organization", () => (
    <Container>
        <CellDiagram organization={noProjectsOrgModel} />
    </Container>
));

storiesOf("Org", module).add("Single project organization", () => (
    <Container>
        <CellDiagram organization={singleProjectOrgModel} />
    </Container>
));

storiesOf("Org", module).add("Simple organization", () => (
    <Container>
        <CellDiagram organization={simpleOrgModel} />
    </Container>
));

storiesOf("Org", module).add("Simple org without dependencies", () => (
    <Container>
        <CellDiagram organization={simpleNoLinkOrgModel} />
    </Container>
));

storiesOf("Org", module).add("Multi projects organization", () => (
    <Container>
        <CellDiagram organization={multiProjectsOrgModel} onComponentDoubleClick={handleComponentDoubleClick} />
    </Container>
));

storiesOf("Org", module).add("Complex organization", () => (
    <Container>
        <CellDiagram organization={complexOrgModel} onComponentDoubleClick={handleComponentDoubleClick} />
    </Container>
));

storiesOf("Org", module).add("wso2 organization", () => (
    <Container>
        <CellDiagram organization={wso2OrgModel as Organization} animation={false} onComponentDoubleClick={handleComponentDoubleClick} />
    </Container>
));

storiesOf("Org", module).add("large organization without connections", () => (
    <Container>
        <CellDiagram organization={kOrgModel as Organization} animation={false} onComponentDoubleClick={handleComponentDoubleClick} />
    </Container>
));

storiesOf("Org", module).add("large organization with some connections", () => (
    <Container>
        <CellDiagram organization={yOrgModel as Organization} animation={false} />
    </Container>
));
