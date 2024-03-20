import { Menu, MenuItem } from "@mui/material";
import { FolderInformation } from "@power-notes/power-notes-shared";
import React from "react";
import { assertNever } from "../../core/utils/AssertNever";
import { createNewFolder } from "../utils/CreateNewFolder";

interface Props extends React.PropsWithChildren {
    readonly folder: FolderInformation;
}

// TODO (whammond): Clean up + move these types elsewhere
type ElementCreateOption = "NOTE" | "FOLDER" | "TODO" | "JOURNAL";

interface CreateMenuOptions {
    readonly createOption: ElementCreateOption;
    readonly displayText: string;
}

const NewElementCreationWrapper = React.memo(
    function NewElementCreationWrapperFn({ children, folder }: Props) {
        const createMenuOptions: ReadonlyArray<CreateMenuOptions> = [
            { displayText: "Create new subfolder", createOption: "FOLDER" },
            { displayText: "Create new note", createOption: "NOTE" },
            { displayText: "Create new todo", createOption: "TODO" },
            { displayText: "Create new journal", createOption: "JOURNAL" },
        ];

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
            null
        );

        // TODO (whammond): Make the location of the context menu more click location specific
        const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            event.stopPropagation();
            setAnchorEl(event.currentTarget);
        };
        const open = Boolean(anchorEl);

        const handleClose = () => {
            setAnchorEl(null);
        };

        // TODO (whammond): Figure out the picture for editing folder, item names
        // TODO (whammond): Add other creation implementations here
        const handleMenuItemClick = React.useCallback(
            (createOption: ElementCreateOption) => {
                switch (createOption) {
                    case "FOLDER":
                        console.log("Create new folder");
                        createNewFolder("Test", folder.id);
                        break;
                    case "NOTE":
                        console.log("Create new note");
                        break;
                    case "TODO":
                        console.log("Create new todo");
                        break;
                    case "JOURNAL":
                        console.log("Create new journal");
                        break;
                    default:
                        assertNever(createOption);
                }
            },
            []
        );

        return (
            <div onContextMenu={handleClickListItem}>
                {children}
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                    }}
                >
                    {createMenuOptions.map(({ createOption, displayText }) => (
                        <MenuItem
                            key={createOption}
                            onClick={() => handleMenuItemClick(createOption)}
                        >
                            {displayText}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
);

export default NewElementCreationWrapper;
