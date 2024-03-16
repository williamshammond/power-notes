import styles from "+styles/TextSection.module.scss";
import { Box } from "@mui/material";
import React from "react";
import { DraftEditorCommand, Editor, EditorState, RichUtils } from "draft-js";

interface Props {
    content: string;
}

export const TextSection = React.memo(function TextSectionFn({
    content,
}: Props) {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    /* TODO (whammond): Remove this and figure out if I want to pass content here or not use it.
     * The question is where/how I want to load the content of a text box. */
    console.log(content);

    const handleKeyCommand = React.useCallback(
        (command: DraftEditorCommand, editorState: EditorState) => {
            const newState = RichUtils.handleKeyCommand(editorState, command);

            if (newState) {
                setEditorState(newState);
                return "handled";
            }

            return "not-handled";
        },
        []
    );

    return (
        <Box sx={{ padding: "10px", border: "1px solid grey" }}>
            <Box className={styles.textEditor}>
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={setEditorState}
                />
            </Box>
        </Box>
    );
});
