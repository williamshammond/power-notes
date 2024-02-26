import React from "react";
import { useParams } from "react-router-dom";

interface Section {
    readonly title: string;
    readonly content: string;
}

interface Note {
    readonly name: string;
    readonly sections: ReadonlyArray<Section>;
}

export function NoteFileView() {
    const [noteContent, setNoteContent] = React.useState("");

    const { noteId } = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:3000/note/${noteId}`)
            .then((res) => {
                console.log(res);
                return res.json() as Promise<Note>;
            })
            .then((data) => setNoteContent(data.name));
    }, [noteId]);

    return <div>{noteContent}</div>;
}
