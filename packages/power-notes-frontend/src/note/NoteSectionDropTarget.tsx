import { useDroppable } from "@dnd-kit/core";
import { Box, useTheme } from "@mui/material";
import React from "react";

export const NoteSectionDropTarget = React.memo(
    function NoteSectionDropTargetF() {
        const theme = useTheme();

        const { isOver, setNodeRef } = useDroppable({
            id: "note-drop-section",
        });

        return (
            <Box
                ref={setNodeRef}
                sx={{
                    backgroundColor: isOver
                        ? theme.palette.secondary.dark
                        : theme.palette.primary.light,
                    minHeight: "50px",
                    minWidth: "200px",
                }}
            >
                Drop sections here to add.
            </Box>
        );
    }
);
