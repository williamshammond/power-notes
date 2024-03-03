import { Icon, ListItem, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { DocumentInformation } from "../types/documentTypes";

interface Props {
    readonly documentInformation: DocumentInformation;
    readonly icon?: React.ReactElement<typeof Icon>;
}

export const LeftMenuItem = React.memo<Props>(function LeftMenuItemFn({
    documentInformation,
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
            to={`/${documentInformation.urlBase}/${documentInformation.id}`}
        >
            <ListItem sx={{ display: "flex", gap: "5px", pl: "5px" }}>
                {icon}
                {documentInformation.name}
            </ListItem>
        </MenuItem>
    );
});
