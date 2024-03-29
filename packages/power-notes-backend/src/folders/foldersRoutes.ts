import express from "express";
import { createFoldersTable, seedFoldersTableData } from "./foldersSeeding";
import {
    getFolders,
    getFolder,
    createFolder,
    updateFolder,
} from "./foldersLogic";

export const foldersRouter = express.Router();

// FOLDERS
foldersRouter.post("/folder", createFolder);
foldersRouter.put("/folder/:folderId", updateFolder);
foldersRouter.put("/foldersTable", createFoldersTable);
foldersRouter.post("/foldersSeedData", seedFoldersTableData);
foldersRouter.get("/folders", getFolders);
foldersRouter.get("/folder/:folderId", getFolder);
