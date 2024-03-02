import {
    AutoStoriesOutlined,
    Checklist,
    EditNote,
    ExpandMore,
} from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    MenuItem,
} from "@mui/material";
import React from "react";
import { LeftMenuItem } from "./LeftMenuItem";

export interface Document {
    readonly id: string;
    readonly name: string;
}
export interface Note extends Document {}
export interface Todo extends Document {}
export interface Journal extends Document {}

export interface Folder {
    readonly id: string;
    readonly name: string;
    readonly subfolders: ReadonlyArray<Folder>;
    readonly notes: ReadonlyArray<Note>;
    readonly todos: ReadonlyArray<Todo>;
    readonly journals: ReadonlyArray<Journal>;
}

interface FolderData {
    readonly folders: ReadonlyArray<Folder>;
}

export const LeftMenu = function LeftMenu() {
    const [folders, setFolders] = React.useState<FolderData>({ folders: [] });

    React.useEffect(() => {
        fetch("http://localhost:3000/folders")
            .then((res) => {
                console.log(res);
                return res.json() as Promise<FolderData>;
            })
            .then((data) => setFolders(data));
    }, []);

    console.log(folders);

    return (
        <Box>
            {folders != null
                ? folders.folders.map((folder) => displayFolder(folder, 0))
                : "Nothing yet"}
        </Box>
    );
};

function displayFolder(folder: Folder, layer: number): JSX.Element {
    return (
        <Accordion
            key={folder.id}
            defaultExpanded={false}
            disableGutters={true}
        >
            <AccordionSummary
                sx={{
                    flexDirection: "row-reverse",
                    "& .MuiAccordionSummary-expandIconWrapper": {
                        transform: "rotate(-90deg)",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "rotate(0deg)",
                    },
                }}
                expandIcon={<ExpandMore />}
                id="panel3-header"
            >
                {folder.name}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: `0 0 0 15px` }}>
                {folder.subfolders.length === 0 &&
                    folder.notes.length === 0 &&
                    folder.todos.length === 0 &&
                    folder.journals.length === 0 && (
                        <MenuItem>No content</MenuItem>
                    )}
                {folder.notes.map((note) => (
                    <LeftMenuItem
                        document={note}
                        icon={<EditNote />}
                        key={note.id}
                    />
                ))}
                {folder.todos.map((todo) => (
                    <LeftMenuItem
                        document={todo}
                        icon={<Checklist />}
                        key={todo.id}
                    />
                ))}
                {folder.journals.map((journal) => (
                    <LeftMenuItem
                        document={journal}
                        icon={<AutoStoriesOutlined />}
                        key={journal.id}
                    />
                ))}
                {folder.subfolders.map((subfolder) =>
                    displayFolder(subfolder, layer + 1)
                )}
            </AccordionDetails>
        </Accordion>
    );
}
