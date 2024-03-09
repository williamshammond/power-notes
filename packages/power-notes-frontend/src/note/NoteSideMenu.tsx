import Box from "@mui/material/Box";
import React from "react";
import { DraggableSection } from "./DraggableSection";

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
                <DraggableSection id="text">
                    <Box sx={{ p: 2 }}>Text</Box>
                </DraggableSection>
                <DraggableSection id="todo">
                    <Box sx={{ p: 2 }}>Todo</Box>
                </DraggableSection>
                <DraggableSection id="media">
                    <Box sx={{ p: 2 }}>Media</Box>
                </DraggableSection>
            </Box>
        </Box>
    );
});

export default NoteSideMenu;
