import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
} from "@mui/material";
import React from "react";

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
                ? folders.folders.map((folder) => displayFolder(folder))
                : "Nothing yet"}
        </Box>
    );
};

function displayFolder(folder: Folder): JSX.Element {
    return (
        <Accordion key={folder.id}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3-content"
                id="panel3-header"
            >
                {folder.name}
            </AccordionSummary>
            <AccordionDetails>
                {folder.subfolders.map((subfolder) => displayFolder(subfolder))}
            </AccordionDetails>
        </Accordion>
    );
}
