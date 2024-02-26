import React from "react";
import { useParams } from "react-router-dom";

interface Journal {
    readonly name: string;
    readonly content: {
        readonly text: string;
        readonly media: string;
    };
}

export function JournalFileView() {
    const [jouralContent, setJournalContent] = React.useState("");

    const { journalId } = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:3000/journal/${journalId}`)
            .then((res) => {
                console.log(res);
                return res.json() as Promise<Journal>;
            })
            .then((data) => setJournalContent(data.name));
    }, [journalId]);

    return <div>{jouralContent}</div>;
}
