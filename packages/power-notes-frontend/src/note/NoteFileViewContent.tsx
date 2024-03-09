import { Box } from "@mui/material";
import React from "react";
import { NoteSideMenu } from "./NoteSideMenu";
import { NoteCanvas } from "./NoteCanvas";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Note } from "./types/Note";
import { Section, SectionType } from "./types/Section";

interface Props {
    readonly note: Note;
}

export const NoteFileViewContent = React.memo<Props>(
    function NoteFileViewContentfn({ note }: Props) {
        const [sections, setSections] = React.useState<ReadonlyArray<Section>>(
            []
        );

        const handleDragEnd = (event: DragEndEvent) => {
            setSections((sections) => {
                const newSections = [...sections];
                newSections.push({
                    title: String(event.active?.id) ?? "unknown",
                    content: "New content here",
                    // TODO (whammond): Figure out how to typeguard here instead. Do not cast
                    type: event.active.id as SectionType,
                });
                return newSections;
            });
        };

        return (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <DndContext onDragEnd={handleDragEnd}>
                    <NoteSideMenu />
                    <NoteCanvas note={note} sections={sections}></NoteCanvas>
                </DndContext>
            </Box>
        );
    }
);
