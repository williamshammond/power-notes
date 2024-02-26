import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
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
            sx={{ backgroundColor: calculateBackground(layer) }}
            defaultExpanded={false}
        >
            <AccordionSummary expandIcon={<ExpandMore />} id="panel3-header">
                {folder.name}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0" }}>
                {folder.subfolders.length === 0 &&
                    folder.notes.length === 0 &&
                    folder.todos.length === 0 &&
                    folder.journals.length === 0 && (
                        <Box
                            sx={{
                                backgroundColor: calculateBackground(layer + 1),
                                padding: "2 0 2 0",
                            }}
                        >
                            No content in folder
                        </Box>
                    )}
                {folder.subfolders.map((subfolder) =>
                    displayFolder(subfolder, layer + 1)
                )}
                {folder.notes.length > 0 && <Divider>Notes</Divider>}
                {folder.notes.map((note) => (
                    <Link to={`/note/${note.id}`} key={note.id}>
                        <Box
                            sx={{
                                height: "30px",
                                padding: "2 0 2 0",
                                borderTop: "1px solid gray",
                                borderBottom: "1px solid gray",
                            }}
                        >
                            {note.name}
                        </Box>
                    </Link>
                ))}
                {folder.todos.length > 0 && <Divider>Todos</Divider>}
                {folder.todos.map((todo) => (
                    <Box key={todo.id} sx={{ padding: "2 0 2 0" }}>
                        {todo.name}
                    </Box>
                ))}
                {folder.journals.length > 0 && <Divider>Journal</Divider>}
                {folder.journals.map((journal) => (
                    <Box key={journal.id} sx={{ padding: "2 0 2 0" }}>
                        {journal.name}
                    </Box>
                ))}
            </AccordionDetails>
        </Accordion>
    );
}
function calculateBackground(layer: number): string {
    const baseHue = 0;
    const baseSaturation = 0;
    const baseLightness = 0;

    const lightnessIncrement = 4;
    const adjustedLightness = baseLightness + layer * lightnessIncrement;

    const finalLightness = Math.min(adjustedLightness, 100);
    const finalColor = `hsl(${baseHue}, ${baseSaturation}%, ${finalLightness}%)`;

    return finalColor;
}
