import { Box } from "@mui/material";
import { NoteInformation } from "@power-notes/power-notes-shared";
import React from "react";
import { assertNever } from "../core/utils/AssertNever";
import { MediaSection } from "./MediaSection";
import { NoteSectionDropTarget } from "./NoteSectionDropTarget";
import { TextSection } from "./TextSection";
import { TodoSection } from "./TodoSection";
import { Section, SectionType } from "./types/Section";

interface Props {
    readonly note: NoteInformation;
    readonly sections: ReadonlyArray<Section>;
}

export const NoteCanvas = React.memo(function NoteCanvasFn({
    note,
    sections,
}: Props) {
    // TODO (whammond): Remove this and use the note data
    console.log(note);

    return (
        <Box sx={{ flexGrow: "1" }}>
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
            {sections.length == 0 && (
                <Box sx={{ minWidth: "200px", minHeight: "100px" }}>
                    No sections yet!
                </Box>
            )}
            <NoteSectionDropTarget />
        </Box>
    );
});
