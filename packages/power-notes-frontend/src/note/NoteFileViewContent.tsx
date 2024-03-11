import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { NoteInformation } from "@power-notes/power-notes-shared";
import React from "react";
import { NoteCanvas } from "./NoteCanvas";
import { NoteSideMenu } from "./NoteSideMenu";
import { Section, SectionType } from "./types/Section";

interface Props {
    readonly note: NoteInformation;
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
