import React from "react";
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
    return (
        <React.Fragment>
            <CenteredDynamicWidthContentWrapper>
                {centeredContent}
            </CenteredDynamicWidthContentWrapper>
            <FullDynamicWidthContentWrapper>
                {dynamicContent}
            </FullDynamicWidthContentWrapper>
        </React.Fragment>
    );
}
