/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        controlButton: {
            backgroundColor: "white !important",
            border: "1px solid #E0E2E9 !important", 
            borderRadius: "2px !important",
            height: "32px !important",
            width: "32px !important",
            "& svg": {
                height: "20px",
                width: "20px"
            }
        }
    })
);
