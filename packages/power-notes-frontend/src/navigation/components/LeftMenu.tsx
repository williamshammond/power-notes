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
import { FolderInformation } from "@power-notes/power-notes-shared";
import { RootFolders } from "@power-notes/power-notes-shared/src/types/FolderInformation";
import React from "react";
import { prefixWithBaseUrl } from "../../core/utils/PrefixWithBaseUrl";
import { prefixWithBaseFoldersApiPath } from "../../core/utils/baseApiPrefixes";
import { LeftMenuItem } from "./LeftMenuItem";

export const LeftMenu = function LeftMenu() {
    const [folders, setFolders] = React.useState<RootFolders>([]);

    React.useEffect(() => {
        fetch(prefixWithBaseUrl(prefixWithBaseFoldersApiPath("folders")))
            .then((res) => {
                console.log(res);
                return res.json() as Promise<ReadonlyArray<FolderInformation>>;
            })
            .then((data) => setFolders(data));
    }, []);

    console.log(folders);

    return (
        <Box>
            {folders != null
                ? folders.map((folder) => displayFolder(folder, 0))
                : "Nothing yet"}
        </Box>
    );
};

function displayFolder(folder: FolderInformation, layer: number): JSX.Element {
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
                                urlBase="note"
                            />
                        ))}
                        {folder.todos.map((todo) => (
                            <LeftMenuItem
                                documentInformation={todo}
                                icon={<Checklist />}
                                key={todo.id}
                                urlBase="todo"
                            />
                        ))}
                        {folder.journals.map((journal) => (
                            <LeftMenuItem
                                documentInformation={journal}
                                icon={<AutoStoriesOutlined />}
                                key={journal.id}
                                urlBase="journal"
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
