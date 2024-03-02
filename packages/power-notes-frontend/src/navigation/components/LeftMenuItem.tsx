import { Icon, ListItem, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Document } from "./LeftMenu";

interface Props {
    document: Document;
    icon?: React.ReactElement<typeof Icon>;
}

export const LeftMenuItem = React.memo<Props>(function LeftMenuItemFn({
    document,
    icon,
}: Props) {
    return (
        <MenuItem
            component={Link}
            style={{
                color: "inherit",
                textDecoration: "inherit",
            }}
            sx={{ pl: `00px` }}
            to={`/journal/${document.id}`}
        >
            <ListItem sx={{ display: "flex", gap: "5px", pl: "5px" }}>
                {icon}
                {document.name}
            </ListItem>
        </MenuItem>
    );
});
