import { Box } from "@mui/material";
import React from "react";
import { Note } from "./NoteFileView";
import { useDroppable } from "@dnd-kit/core";

interface Props {
    readonly note: Note;
}

export const NoteCanvas = React.memo(function NoteCanvasFn({ note }: Props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "canvas",
    });

    return (
        <Box ref={setNodeRef} sx={{ backgroundColor: isOver ? "red" : "blue" }}>
            {note.sections.map((section) => (
                <div key={section.title}>{section.content}</div>
            ))}
        </Box>
    );
});
