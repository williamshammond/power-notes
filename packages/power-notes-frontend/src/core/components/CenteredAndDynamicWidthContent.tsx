import React from "react";
import { useIsLeftMenuOpen } from "../../navigation/LeftMenuContext";
import { CenteredDynamicWidthContentWrapper } from "./CenteredDynamicWidthContentWrapper";
import { FullDynamicWidthContentWrapper } from "./FullDynamicWidthContentWrapper";

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
        <React.Fragment>
            <CenteredDynamicWidthContentWrapper isMinimized={isLeftMenuOpen}>
                {centeredContent}
            </CenteredDynamicWidthContentWrapper>
            <FullDynamicWidthContentWrapper>
                {dynamicContent}
            </FullDynamicWidthContentWrapper>
        </React.Fragment>
    );
}
