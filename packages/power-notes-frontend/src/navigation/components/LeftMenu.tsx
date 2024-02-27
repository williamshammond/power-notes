import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    MenuItem,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Document {
    readonly id: string;
    readonly name: string;
}
interface Note extends Document {}
interface Todo extends Document {}
interface Journal extends Document {}

interface Folder {
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
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "rotate(-90deg)",
                    },
                }}
                expandIcon={<ExpandMore />}
                id="panel3-header"
            >
                {folder.name}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: `0 0 0 10px` }}>
                {folder.subfolders.length === 0 &&
                    folder.notes.length === 0 &&
                    folder.todos.length === 0 &&
                    folder.journals.length === 0 && (
                        <MenuItem>No content</MenuItem>
                    )}
                {folder.subfolders.map((subfolder) =>
                    displayFolder(subfolder, layer + 1)
                )}
                {folder.notes.map((note) => (
                    <MenuItem
                        component={Link}
                        key={note.id}
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                        sx={{ pl: `30px` }}
                        to={`/note/${note.id}`}
                    >
                        {note.name}
                    </MenuItem>
                ))}
                {folder.todos.map((todo) => (
                    <MenuItem
                        component={Link}
                        key={todo.id}
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                        sx={{ pl: `30px` }}
                        to={`/todo/${todo.id}`}
                    >
                        {todo.name}
                    </MenuItem>
                ))}
                {folder.journals.map((journal) => (
                    <MenuItem
                        key={journal.id}
                        component={Link}
                        style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}
                        sx={{ pl: `30px` }}
                        to={`/journal/${journal.id}`}
                    >
                        {journal.name}
                    </MenuItem>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}
function calculateBackground(layer: number): string {
    const baseHue = 0;
    const baseSaturation = 0;
    const baseLightness = 0;

    const lightnessIncrement = 2;
    const adjustedLightness = baseLightness + layer * lightnessIncrement;

    const finalLightness = Math.min(adjustedLightness, 100);
    const finalColor = `hsl(${baseHue}, ${baseSaturation}%, ${finalLightness}%)`;

    return finalColor;
}
