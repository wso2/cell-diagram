/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CellDiagram } from "../../../Diagram";
import { Project } from "../../../types";
import { Container, PreviewContainer, componentMenu, handleComponentDoubleClick } from "../../utils";
import { model1 } from "./data/model1";
import { model2 } from "./data/model2";
import { obsModel1 } from "./data/obs-model1";
import { obsModel2 } from "./data/obs-model2";

const meta: Meta<typeof CellDiagram> = {
    title: "Project Diagram/Complex",
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

export const ComponentLinks: Story = {
    args: {
        project: model1,
        onComponentDoubleClick: handleComponentDoubleClick,
    },
};

export const WithUnusedConfigurations: Story = {
    args: {
        project: model2,
        onComponentDoubleClick: handleComponentDoubleClick,
    },
};

export const WithObservabilityData: Story = {
    args: {
        project: obsModel1,
        componentMenu: componentMenu,
        onComponentDoubleClick: handleComponentDoubleClick,
    },
};

export const WithObservabilityDataV2: Story = {
    args: {
        project: obsModel2,
        componentMenu: componentMenu,
        onComponentDoubleClick: handleComponentDoubleClick,
        modelVersion: "v2",
    },
};
