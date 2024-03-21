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
import React from "react";
import { LeftMenuItem } from "./LeftMenuItem";
import { NewElementCreationWrapper } from "./NewElementCreationWrapper";
import { displayFolder } from "../utils/DisplayFolder";

interface Props {
    readonly folder: FolderInformation;
    readonly layer: number;
}

export const LeftMenuFolder = React.memo(function LeftMenuFolderFn({
    folder,
    layer,
}: Props) {
    return (
        <NewElementCreationWrapper folder={folder}>
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
                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                            {
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
        </NewElementCreationWrapper>
    );
});
