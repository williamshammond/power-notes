import React from "react";
import { Note } from "./NoteFileView";
import { NoteTitle } from "./NoteTitle";

interface Props {
    readonly note: Note;
}

export const NoteFileViewContent = React.memo<Props>(
    function NoteFileViewContentfn({ note }: Props) {
        return (
            <React.Fragment>
                <NoteTitle title={note.name} />
            </React.Fragment>
        );
    }
);
