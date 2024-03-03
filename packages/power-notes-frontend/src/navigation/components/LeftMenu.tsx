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
    Divider,
    MenuItem,
} from "@mui/material";
import React from "react";
import { LeftMenuItem } from "./LeftMenuItem";
import { FolderData, Folder } from "../types/documentTypes";

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
                    paddingLeft: "0px",
                }}
                expandIcon={<ExpandMore />}
                id="panel3-header"
            >
                {folder.name}
            </AccordionSummary>

            <AccordionDetails sx={{ padding: `0 0 0 13px` }}>
                <Box
                    sx={{
                        padding: "0",
                        display: "flex",
                        flexDirection: "row",
                        gap: "7px",
                        "& :before": { backgroundColor: "inherit" },
                    }}
                >
                    <Divider orientation="vertical" flexItem />
                    {folder.subfolders.length === 0 &&
                        folder.notes.length === 0 &&
                        folder.todos.length === 0 &&
                        folder.journals.length === 0 && (
                            <MenuItem>No content</MenuItem>
                        )}
                    <Box>
                        {folder.notes.map((note) => (
                            <LeftMenuItem
                                documentInformation={note}
                                icon={<EditNote />}
                                key={note.id}
                            />
                        ))}
                        {folder.todos.map((todo) => (
                            <LeftMenuItem
                                documentInformation={todo}
                                icon={<Checklist />}
                                key={todo.id}
                            />
                        ))}
                        {folder.journals.map((journal) => (
                            <LeftMenuItem
                                documentInformation={journal}
                                icon={<AutoStoriesOutlined />}
                                key={journal.id}
                            />
                        ))}
                        {folder.subfolders.map((subfolder) =>
                            displayFolder(subfolder, layer + 1)
                        )}
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}
