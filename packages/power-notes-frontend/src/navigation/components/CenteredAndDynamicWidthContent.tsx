import React from "react";
import { useIsLeftMenuOpen } from "../LeftMenuContext";
import { CenteredContentWrapper } from "./CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "./DynamicWidthContentWrapper";

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
        <React.Fragment>
            <CenteredContentWrapper>{centeredContent}</CenteredContentWrapper>
            <DynamicWidthContentWrapper isMinimized={isLeftMenuOpen}>
                {dynamicContent}
            </DynamicWidthContentWrapper>
        </React.Fragment>
    );
}
