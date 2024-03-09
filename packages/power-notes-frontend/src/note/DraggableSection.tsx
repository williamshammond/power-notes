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
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <Paper
            style={style}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            sx={{ mb: 2, cursor: "grab" }}
        >
            {children}
        </Paper>
    );
});
