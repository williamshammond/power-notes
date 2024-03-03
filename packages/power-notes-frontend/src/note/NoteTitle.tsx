import React from "react";

interface Props {
    title: string;
}

export const NoteTitle = React.memo<Props>(function NoteTitleFn({
    title,
}: Props) {
    return <div>{title}</div>;
});
