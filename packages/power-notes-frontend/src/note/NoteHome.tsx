import { Typography } from "@mui/material";
import React from "react";
import { useIsLeftMenuOpen } from "../navigation/LeftMenuContext";
import { CenteredContentWrapper } from "../navigation/components/CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "../navigation/components/DynamicWidthContentWrapper";

export function NoteHome() {
    const isLeftMenuOpen = useIsLeftMenuOpen();

    return (
        <React.Fragment>
            <CenteredContentWrapper>
                <Typography variant="h3">Note Home</Typography>
            </CenteredContentWrapper>
            <DynamicWidthContentWrapper isMinimized={isLeftMenuOpen}>
                <Typography variant="body1">
                    Actual note page content will go here
                </Typography>
            </DynamicWidthContentWrapper>
        </React.Fragment>
    );
}
