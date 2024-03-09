import { Box } from "@mui/material";
import React from "react";
import { Note } from "./NoteFileView";
import { NoteSideMenu } from "./NoteSideMenu";
import { NoteCanvas } from "./NoteCanvas";
import { DndContext } from "@dnd-kit/core";

interface Props {
    readonly note: Note;
}

export const NoteFileViewContent = React.memo<Props>(
    function NoteFileViewContentfn({ note }: Props) {
        return (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <DndContext>
                    <NoteSideMenu />
                    <NoteCanvas note={note}></NoteCanvas>
                </DndContext>
            </Box>
        );
    }
);
