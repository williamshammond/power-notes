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

export const NewElementCreationWrapper = React.memo(
    function NewElementCreationWrapperFn({ children, folder }: Props) {
        const createMenuOptions: ReadonlyArray<CreateMenuOptions> = [
            { displayText: "Create new subfolder", createOption: "FOLDER" },
            { displayText: "Create new note", createOption: "NOTE" },
            { displayText: "Create new todo", createOption: "TODO" },
            { displayText: "Create new journal", createOption: "JOURNAL" },
        ];

        const [anchorPosition, setAnchorPosition] = React.useState<
            | {
                  x: number;
                  y: number;
              }
            | undefined
        >(undefined);

        const open = anchorPosition !== undefined;

        // TODO (whammond): Make the location of the context menu more click location specific
        const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            event.stopPropagation();
            setAnchorPosition({ x: event.clientX, y: event.clientY });
        };

        const handleClose = () => {
            setAnchorPosition(undefined);
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
                    anchorReference="anchorPosition"
                    anchorPosition={
                        anchorPosition
                            ? { top: anchorPosition.y, left: anchorPosition.x }
                            : undefined
                    }
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
