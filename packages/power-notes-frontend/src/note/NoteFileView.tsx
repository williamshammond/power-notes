import { NoteInformation } from "@power-notes/power-notes-shared";
import React from "react";
import { useParams } from "react-router-dom";
import { CenteredDynamicWidthContentWrapper } from "../core/components/CenteredDynamicWidthContentWrapper";
import { FullDynamicWidthContentWrapper } from "../core/components/FullDynamicWidthContentWrapper";
import { prefixWithBaseUrl } from "../core/utils/PrefixWithBaseUrl";
import { prefixWithBaseNotesApiPath } from "../core/utils/baseApiPrefixes";
import { NoteFileViewContent } from "./NoteFileViewContent";
import { NoteTitle } from "./NoteTitle";

export function NoteFileView() {
    const [note, setNote] = React.useState<NoteInformation | undefined>(
        undefined
    );

    const { noteId } = useParams();

    React.useEffect(() => {
        try {
            fetch(
                prefixWithBaseUrl(prefixWithBaseNotesApiPath(`note/${noteId}`))
            )
                .then((res) => {
                    console.log(res);
                    return res.json() as Promise<NoteInformation>;
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
