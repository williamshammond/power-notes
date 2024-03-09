import Box from "@mui/material/Box";
import React from "react";
import { DraggableSection } from "./DraggableSection";
import { SectionType } from "./types/Section";

// Draggable Section Component

export const NoteSideMenu = React.memo(function NoteSideMenuFn() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    width: "200px",
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
        </Box>
    );
});

export default NoteSideMenu;
