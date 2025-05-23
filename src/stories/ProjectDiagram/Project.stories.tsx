/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { Meta, storiesOf, StoryObj } from "@storybook/react";
import { CellDiagram } from "../../Diagram";
import { Project } from "../../types";
import { Container, PreviewContainer, componentMenu, handleComponentDoubleClick } from "../utils";
import { noComponentModel, singleComponentModel, singleExposedComponentModel, allComponentModel, componentDependencyModel, unlinkConfigurationModel, testModel1, testModel22, testModel2, testModel3, observabilityModel } from "./data/models";

const meta: Meta<typeof CellDiagram> = {
    title: "Project Diagram",
    component: CellDiagram,
    decorators: [(Story, context) => {
        const StoryContainer = context.args.previewMode ? PreviewContainer : Container;
        return <StoryContainer>{Story()}</StoryContainer>;
    }],
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyCell: Story = {
    args: {
        project: noComponentModel,
    },
};

export const SingleComponent: Story = {
    args: {
        project: singleComponentModel,
    },
};

export const SingleComponentWithExposeLink: Story = {
    args: {
        project: singleExposedComponentModel,
    },
};

export const AllComponentTypes: Story = {
    args: {
        project: allComponentModel,
    },
};

export const ComponentDependencies: Story = {
    args: {
        project: componentDependencyModel,
    },
};

export const ProjectConfigurations: Story = {
    args: {
        project: unlinkConfigurationModel,
    },
};

export const TestOutComponent: Story = {
    args: {
        project: testModel1,
    },
};

export const TestStraightComponents: Story = {
    args: {
        project: testModel22,
    },
};

export const TestDisable: Story = {
    args: {
        project: testModel2,
    },
};

export const TestStraightMoreComponents: Story = {
    args: {
        project: testModel3,
    },
};

export const ObservabilityDataAndEvents: Story = {
    args: {
        project: observabilityModel,
        componentMenu: componentMenu,
        onComponentDoubleClick: handleComponentDoubleClick,
    },
};
