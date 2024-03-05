import { Box } from "@mui/material";
import React from "react";
import { Note } from "./NoteFileView";
import { NoteSideMenu } from "./NoteSideMenu";
import { NoteCanvas } from "./NoteCanvas";

interface Props {
    readonly note: Note;
}

export const NoteFileViewContent = React.memo<Props>(
    function NoteFileViewContentfn({ note }: Props) {
        return (
            <Box>
                <NoteSideMenu />
                <NoteCanvas note={note}></NoteCanvas>
            </Box>
        );
    }
);
