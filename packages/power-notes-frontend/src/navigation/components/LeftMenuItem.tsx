import { ListItem, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Document } from "./LeftMenu";
import { Inbox } from "@mui/icons-material";

interface Props {
    document: Document;
}

export const LeftMenuItem = React.memo<Props>(function LeftMenuItemFn({
    document,
}: Props) {
    return (
        <MenuItem
            component={Link}
            style={{
                color: "inherit",
                textDecoration: "inherit",
            }}
            sx={{ pl: `30px` }}
            to={`/journal/${document.id}`}
        >
            <ListItem>
                <Inbox />
                {document.name}
            </ListItem>
        </MenuItem>
    );
});
