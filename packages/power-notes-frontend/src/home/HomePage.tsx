import React from "react";
import { CenteredContentWrapper } from "../core/components/CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "../core/components/DynamicWidthContentWrapper";
import { useIsLeftMenuOpen } from "../navigation/LeftMenuContext";
import { MainSectionNavBoxes } from "../navigation/components/MainSectionNavBoxes";

export function HomePage() {
    const isLeftMenuOpen = useIsLeftMenuOpen();

    return (
        <React.Fragment>
            <CenteredContentWrapper>
                <MainSectionNavBoxes />
            </CenteredContentWrapper>
            {
                //TODO (whammond): Fill in DynamicWidthContent with content that should move later one
            }
            <DynamicWidthContentWrapper
                isMinimized={isLeftMenuOpen}
            ></DynamicWidthContentWrapper>
        </React.Fragment>
    );
}
