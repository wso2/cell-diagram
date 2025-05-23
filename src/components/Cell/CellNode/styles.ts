/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import styled from "@emotion/styled";
import { CIRCLE_WIDTH, Colors, DOT_WIDTH, CELL_LINE_MIN_WIDTH } from "../../../resources";

interface StyleProps {
    isSelected?: boolean;
    isClickable?: boolean;
    isCollapsed?: boolean;
    isFocused?: boolean;
    height?: number;
    borderWidth: number;
}

export const CellNode: React.FC<StyleProps> = styled.div`
    width: ${(props: StyleProps) => props.height}px;
    height: ${(props: StyleProps) => props.height}px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;
    overflow: visible;
    pointer-events: none;

    #mainCell svg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    #mainCell path {
        stroke: ${Colors.OUTLINE};
        stroke-width: ${(props: StyleProps) => props.borderWidth};
        fill: none;
        pointer-events: none;
    }
`;

interface ElementProps {
    show: boolean;
}


export const Circle: React.FC<ElementProps> = styled.div`
    visibility: ${(props: ElementProps) => (props.show ? "unset" : "hidden")};
    width: ${CIRCLE_WIDTH}px;
    height: ${CIRCLE_WIDTH}px;
    border-radius: 50%;
    border: ${CELL_LINE_MIN_WIDTH}px solid ${Colors.OUTLINE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.SURFACE};
`;

export const Dot: React.FC<any> = styled.div`
    width: ${DOT_WIDTH}px;
    height: ${DOT_WIDTH}px;
    border-radius: 50%;
    border: ${CELL_LINE_MIN_WIDTH}px solid ${Colors.OUTLINE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.SURFACE_DIM};
`;

export const TopPortCircle: React.FC<any> = styled(Circle)`
    position: absolute;
    top: -${CIRCLE_WIDTH / 2}px;
    left: 50% - ${CIRCLE_WIDTH / 2}px;
`;

export const LeftPortCircle: React.FC<any> = styled(Circle)`
    position: absolute;
    top: 50% - ${CIRCLE_WIDTH / 2}px;
    left: -${CIRCLE_WIDTH / 2}px;
`;

export const RightPortCircle: React.FC<any> = styled(Dot)`
    position: absolute;
    top: 50% - ${DOT_WIDTH / 2 + CELL_LINE_MIN_WIDTH}px;
    right: -${DOT_WIDTH / 2 + CELL_LINE_MIN_WIDTH}px;
`;

export const BottomPortsWrapper: React.FC<any> = styled.div`
    position: absolute;
    bottom: -${DOT_WIDTH / 2 + CELL_LINE_MIN_WIDTH}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${CIRCLE_WIDTH}px;
`;

export const RightPortsWrapper: React.FC<any> = styled.div`
    position: absolute;
    right: -${DOT_WIDTH / 2 + CELL_LINE_MIN_WIDTH}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${CIRCLE_WIDTH}px;
`;

export const DotWrapper: React.FC<any> = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label: React.FC<any> = styled.div`
    margin-top: 10px;
`;

export const PortLabel: React.FC<any> = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "GilmerMedium";
    color: ${Colors.OUTLINE};
    font-size: 20px;
    span {
        text-align: left;
        width: max-content;
    }
`;

export const TopPortLabel: React.FC<any> = styled(PortLabel)`
    top: -24px;
    right: -116px;
`;

export const LeftPortLabel: React.FC<any> = styled(PortLabel)`
    top: -24px;
    left: -116px;
    align-items: flex-end;
    span {
        text-align: right;
    }
`;

export const RightPortLabel: React.FC<any> = styled(PortLabel)`
    top: -32px;
    right: -116px;
`;

export const BottomPortLabel: React.FC<any> = styled(PortLabel)`
    bottom: -36px;
    left: -132px;
    align-items: flex-end;
    span {
        text-align: right;
    }
`;

export const IconWrapper: React.FC<any> = styled.div`
    height: 32px;
    width: 32px;
    color: ${Colors.OUTLINE};
    font-size: 28px;
`;

export const TopIconWrapper: React.FC<any> = styled.div`
    height: 32px;
    width: 32px;
    color: ${Colors.OUTLINE};
    font-size: 28px;
    transform: rotate(90deg);
`;
