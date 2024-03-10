import express from "express";
import { getFolder, getFolders, getJournal, getNote, getTodo } from "./logic";
import {
    createFoldersTable,
    createNotesTable,
    seedFoldersTableData,
    seedNotesTableData,
} from "./seeding";

export const router = express.Router();

// FOLDERS
router.put("/foldersTable", createFoldersTable);
router.post("/foldersSeedData", seedFoldersTableData);
router.get("/folders", getFolders);
router.get("/folder/:folderId", getFolder);

// NOTES
router.put("/notesTable", createNotesTable);
router.post("/notesSeedData", seedNotesTableData);
router.get("/note/:noteId", getNote);

// TODOS
router.get("/todo/:todoId", getTodo);

// JOURNALS
router.get("/journal/:journalId", getJournal);
