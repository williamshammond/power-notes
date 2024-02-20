import { Box } from "@mui/material";
import React from "react";
import { useIsLeftMenuOpen } from "../../navigation/LeftMenuContext";
import { CenteredContentWrapper } from "./CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "./DynamicWidthContentWrapper";

interface CenteredAndDynamicContentProps {
    readonly centeredContent: React.ReactNode;
    readonly dynamicContent: React.ReactNode;
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
