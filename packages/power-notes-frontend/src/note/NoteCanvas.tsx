import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import React from "react";
import { assertNever } from "../core/utils/AssertNever";
import { MediaSection } from "./MediaSection";
import { TextSection } from "./TextSection";
import { TodoSection } from "./TodoSection";
import { Note } from "./types/Note";
import { Section, SectionType } from "./types/Section";

interface Props {
    readonly note: Note;
    readonly sections: ReadonlyArray<Section>;
}

export const NoteCanvas = React.memo(function NoteCanvasFn({
    note,
    sections,
}: Props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "canvas",
    });

    return (
        <Box ref={setNodeRef} sx={{ backgroundColor: isOver ? "red" : "blue" }}>
            {note.sections.map((section) => (
                <div key={section.title}>{section.content}</div>
            ))}
            {sections.map((section) => {
                switch (section.type) {
                    case SectionType.MEDIA:
                        return (
                            <MediaSection
                                key={section.title}
                                content={section.content}
                            />
                        );
                    case SectionType.TEXT:
                        return (
                            <TextSection
                                key={section.title}
                                content={section.content}
                            />
                        );
                    case SectionType.TODO:
                        return (
                            <TodoSection
                                key={section.title}
                                content={section.content}
                            />
                        );
                    default:
                        assertNever(section.type);
                }
            })}
        </Box>
    );
});
