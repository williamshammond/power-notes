import { Box } from "@mui/material";
import React from "react";

interface FolderDataResponse {
    folders: FolderData;
}

interface FolderData {
    folders: string[];
}

export const LeftMenu = function LeftMenu() {
    const [folders, setFolders] = React.useState<FolderData>({ folders: [] });

    React.useEffect(() => {
        fetch("http://localhost:3000/folders")
            .then((res) => {
                console.log(res);
                return res.json() as Promise<FolderDataResponse>;
            })
            .then((data) => setFolders(data.folders));
    }, []);

    console.log(folders);

    return (
        <Box>
            {folders != null
                ? folders.folders.map((folder) => (
                      <Box key={folder}>{folder}</Box>
                  ))
                : "Nothing yet"}
        </Box>
    );
};
