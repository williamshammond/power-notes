import { useDraggable } from "@dnd-kit/core";
import Paper from "@mui/material/Paper";
import React from "react";

interface Props extends React.PropsWithChildren {
    readonly id: string;
}

export const DraggableSection = React.memo(function DraggableSectionFn({
    id,
    children,
}: Props) {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id,
    });

    return (
        <Paper
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            sx={{ mb: 2, cursor: "grab" }}
        >
            {children}
        </Paper>
    );
});
