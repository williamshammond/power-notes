import React from "react";
import { useParams } from "react-router-dom";
import { FullDynamicWidthContentWrapper } from "../core/components/FullDynamicWidthContentWrapper";

interface Journal {
    readonly name: string;
    readonly content: {
        readonly text: string;
        readonly media: string;
    };
}

export function JournalFileView() {
    const [journalContent, setJournalContent] = React.useState("");

    const { journalId } = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:3000/journal/${journalId}`)
            .then((res) => {
                console.log(res);
                return res.json() as Promise<Journal>;
            })
            .then((data) => setJournalContent(data.name));
    }, [journalId]);

    if (journalContent == null) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <FullDynamicWidthContentWrapper>
                {journalContent}
            </FullDynamicWidthContentWrapper>
        </React.Fragment>
    );
}
