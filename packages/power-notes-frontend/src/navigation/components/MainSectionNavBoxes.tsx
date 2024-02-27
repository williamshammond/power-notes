import { Box, useTheme } from "@mui/material";
import { HomeSectionCard } from "./HomeSectionCard";
import React from "react";
import { LEFT_MENU_WIDTH_PX } from "../../core/constants";

interface MainSectionNavBoxesProps {}

interface SectionInformation {
    readonly title: string;
    readonly path: string;
    readonly sectionInformation: string;
}

const sections: readonly SectionInformation[] = [
    {
        title: "Notes",
        path: "note",
        sectionInformation:
            "Flexible and dynamic collections of free form text, actionable lists, media, and other widgets. Express your thoughts, plan your designs, and share your experiences.",
    },
    {
        title: "Todo Lists",
        path: "todo",
        sectionInformation:
            "Structured, compounding todo lists with flexible subcompentization, tracking and designation. Plan your goals, iterate on your timelines, break apart your subtasks, and track your results.",
    },
    {
        title: "Journals",
        path: "journal",
        sectionInformation:
            "Freeform text and media. Share your thoughts and experiences through writing and photos in a minimalist text editor.",
    },
];

export const MainSectionNavBoxes = React.memo<MainSectionNavBoxesProps>(
    function MainSectionNavBoxesFn() {
        const theme = useTheme();

        return (
            <Box
                sx={{
                    alignItems: "center",
                    color: theme.palette.text.primary,
                    display: "flex",
                    gap: "50px",
                    justifyContent: "space-evenly",
                    pl: `${LEFT_MENU_WIDTH_PX}px`,
                    pr: `${LEFT_MENU_WIDTH_PX}px`,
                    pt: "100px",
                }}
            >
                {sections.map((section) => (
                    <HomeSectionCard
                        key={section.title}
                        path={section.path}
                        sectionInformation={section.sectionInformation}
                        sectionTitle={section.title}
                    />
                ))}
            </Box>
        );
    }
);
