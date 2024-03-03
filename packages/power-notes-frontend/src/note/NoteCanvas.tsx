import { Box } from "@mui/material";
import React from "react";
import { Note } from "./NoteFileView";

interface Props {
    readonly note: Note;
}

export const NoteCanvas = React.memo(function NoteCanvasFn({ note }: Props) {
    return (
        <Box>
            {note.sections.map((section) => (
                <div key={section.title}>{section.content}</div>
            ))}
        </Box>
    );
});
