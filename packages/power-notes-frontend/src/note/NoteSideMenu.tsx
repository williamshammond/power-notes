import Box from "@mui/material/Box";
import React from "react";
import { DraggableSection } from "./DraggableSection";
import { SectionType } from "./types/Section";
import { useTheme } from "@mui/material";

// Draggable Section Component

export const NoteSideMenu = React.memo(function NoteSideMenuFn() {
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                width: "100px",
                background: palette.primary.light,
            }}
        >
            <DraggableSection id={SectionType.TEXT}>
                <Box sx={{ p: 2 }}>Text</Box>
            </DraggableSection>
            <DraggableSection id={SectionType.TODO}>
                <Box sx={{ p: 2 }}>Todo</Box>
            </DraggableSection>
            <DraggableSection id={SectionType.MEDIA}>
                <Box sx={{ p: 2 }}>Media</Box>
            </DraggableSection>
        </Box>
    );
});

export default NoteSideMenu;
