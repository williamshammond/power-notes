import React from "react";
import { useIsLeftMenuOpen } from "../LeftMenuContext";
import { CenteredContentWrapper } from "./CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "./DynamicWidthContentWrapper";
import { Box } from "@mui/material";

interface CenteredAndDynamicContentProps {
    centeredContent: React.ReactNode;
    dynamicContent: React.ReactNode;
}

export function CenteredAndDynamicWidthContent({
    centeredContent,
    dynamicContent,
}: CenteredAndDynamicContentProps) {
    const isLeftMenuOpen = useIsLeftMenuOpen();

    return (
        <Box
            sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CenteredContentWrapper sx={{ alignSelf: "flex-start" }}>
                {centeredContent}
            </CenteredContentWrapper>
            <DynamicWidthContentWrapper
                isMinimized={isLeftMenuOpen}
                sx={{ alignSelf: "flex-end" }}
            >
                {dynamicContent}
            </DynamicWidthContentWrapper>
        </Box>
    );
}
