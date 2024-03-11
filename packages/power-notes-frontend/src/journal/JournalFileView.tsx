import React from "react";
import { useParams } from "react-router-dom";
import { FullDynamicWidthContentWrapper } from "../core/components/FullDynamicWidthContentWrapper";
import { prefixWithBaseUrl } from "../core/utils/PrefixWithBaseUrl";
import { prefixWithBaseJournalsApiPath } from "../core/utils/baseApiPrefixes";

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
        fetch(
            prefixWithBaseUrl(
                prefixWithBaseJournalsApiPath(`journal/${journalId}`)
            )
        )
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
