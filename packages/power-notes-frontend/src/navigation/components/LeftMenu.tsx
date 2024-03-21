import { Box, Button } from "@mui/material";
import { FolderInformation } from "@power-notes/power-notes-shared";
import { RootFolders } from "@power-notes/power-notes-shared/src/types/FolderInformation";
import React from "react";
import { prefixWithBaseUrl } from "../../core/utils/PrefixWithBaseUrl";
import { prefixWithBaseFoldersApiPath } from "../../core/utils/baseApiPrefixes";
import { createNewFolder } from "../utils/CreateNewFolder";
import { displayFolder } from "../utils/DisplayFolder";

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

    const handleNewFolderClick = React.useCallback(async () => {
        const folderResponse = await createNewFolder("Test", undefined);
        if (folderResponse.error) {
            console.error(folderResponse.error);
        }

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
            <Button sx={{ background: "white" }} onClick={handleNewFolderClick}>
                Create new folder
            </Button>
        </Box>
    );
};
