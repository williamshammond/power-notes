import React from "react";
import { useIsLeftMenuOpen } from "../navigation/LeftMenuContext";
import { Typography } from "@mui/material";
import { CenteredContentWrapper } from "../navigation/components/CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "../navigation/components/DynamicWidthContentWrapper";

export function TodoHome() {
    const isLeftMenuOpen = useIsLeftMenuOpen();

    return (
        <React.Fragment>
            <CenteredContentWrapper>
                <Typography variant="h3">Todo Home</Typography>
            </CenteredContentWrapper>
            <DynamicWidthContentWrapper isMinimized={isLeftMenuOpen}>
                <Typography variant="body1">
                    Actual todo page content will go here
                </Typography>
            </DynamicWidthContentWrapper>
        </React.Fragment>
    );
}
