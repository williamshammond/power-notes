import React from "react";
import { useParams } from "react-router-dom";
import { FullDynamicWidthContentWrapper } from "../core/components/FullDynamicWidthContentWrapper";
import { NoteFileViewContent } from "./NoteFileViewContent";
import { CenteredDynamicWidthContentWrapper } from "../core/components/CenteredDynamicWidthContentWrapper";
import { NoteTitle } from "./NoteTitle";

export interface Section {
    readonly title: string;
    readonly content: string;
}

export interface Note {
    readonly name: string;
    readonly sections: ReadonlyArray<Section>;
}

export function NoteFileView() {
    const [note, setNote] = React.useState<Note | undefined>(undefined);

    const { noteId } = useParams();

    React.useEffect(() => {
        try {
            fetch(`http://localhost:3000/note/${noteId}`)
                .then((res) => {
                    console.log(res);
                    return res.json() as Promise<Note>;
                })
                .then((data) => setNote(data));
        } catch (e) {
            console.log(e);
        }
    }, [noteId]);

    if (note == null || note.name == null) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <CenteredDynamicWidthContentWrapper>
                <NoteTitle title={note.name} />
            </CenteredDynamicWidthContentWrapper>
            <FullDynamicWidthContentWrapper>
                {<NoteFileViewContent note={note} />}
            </FullDynamicWidthContentWrapper>
        </React.Fragment>
    );
}
