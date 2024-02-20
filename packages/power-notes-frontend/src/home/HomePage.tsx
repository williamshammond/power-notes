import styles from "+styles/HomePage.module.scss";
import { Box, useTheme } from "@mui/material";
import React from "react";
import { useIsLeftMenuOpen } from "../navigation/LeftMenuContext";
import { CenteredContentWrapper } from "../navigation/components/CenteredContentWrapper";
import { DynamicWidthContentWrapper } from "../navigation/components/DynamicWidthContentWrapper";
import { HomeSectionCard } from "../navigation/components/HomeSectionCard";

interface SectionInformation {
    readonly title: string;
    readonly path: string;
}

const sections: readonly SectionInformation[] = [
    { title: "Note", path: "note" },
    { title: "Todo List", path: "todo" },
    { title: "Journal", path: "journal" },
];

export function HomePage() {
    const theme = useTheme();
    const isLeftMenuOpen = useIsLeftMenuOpen();

    return (
        <React.Fragment>
            <CenteredContentWrapper>
                <Box
                    sx={{
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.default,
                    }}
                >
                    <div className={styles.cardContainer}>
                        {sections.map((section) => (
                            <HomeSectionCard
                                key={section.title}
                                sectionTitle={section.title}
                                path={section.path}
                            />
                        ))}
                    </div>
                </Box>
            </CenteredContentWrapper>
            {
                //TODO (whammond): Fill in DynamicWidthContent with content that should move later on
            }
            <DynamicWidthContentWrapper isMinimized={isLeftMenuOpen}>
                Test!
            </DynamicWidthContentWrapper>
        </React.Fragment>
    );
}
