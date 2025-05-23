/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { useState } from "react";
import { DiagramLayer } from "../types";

interface ActiveLayersHookProps {
    defaultDiagramLayer?: DiagramLayer;
}

export const useActiveLayers = (props: ActiveLayersHookProps) => {
    const [activeLayers, setActiveLayers] = useState<DiagramLayer[]>([props.defaultDiagramLayer]);

    const addLayer = (layer: DiagramLayer) => {
        if (!activeLayers.includes(layer)) {
            setActiveLayers((prev) => [...prev, layer]);
        }
    };

    const removeLayer = (layer: DiagramLayer) => {
        if (activeLayers.length > 1) {
            // Don't allow removing the last layer
            setActiveLayers(activeLayers.filter((l) => l !== layer));
        }
    };

    const setLayer = (layer: DiagramLayer) => {
        setActiveLayers([layer]);
    };

    const hasLayer = (layer: DiagramLayer) => {
        return activeLayers.includes(layer);
    };

    return { activeLayers, addLayer, removeLayer, setLayer, hasLayer };
};
