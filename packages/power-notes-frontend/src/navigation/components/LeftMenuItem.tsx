import { Icon, ListItem, MenuItem } from "@mui/material";
import { DocumentInformation } from "@power-notes/power-notes-shared";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    readonly documentInformation: DocumentInformation;
    readonly icon?: React.ReactElement<typeof Icon>;
    readonly urlBase: string;
}

export const LeftMenuItem = React.memo<Props>(function LeftMenuItemFn({
    documentInformation,
    icon,
    urlBase,
}: Props) {
    return (
        <MenuItem
            component={Link}
            style={{
                color: "inherit",
                textDecoration: "inherit",
            }}
            sx={{ pl: `00px` }}
            to={`/${urlBase}/${documentInformation.id}`}
        >
            <ListItem sx={{ display: "flex", gap: "5px", pl: "5px" }}>
                {icon}
                {documentInformation.name}
            </ListItem>
        </MenuItem>
    );
});
