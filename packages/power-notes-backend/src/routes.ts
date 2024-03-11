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

// JOURNALS
router.put("/journalsTable", createFoldersTable);
router.post("/journalsSeedData", seedFoldersTableData);
router.get("/journal/:journalId", getJournal);

// NOTES
router.put("/notesTable", createNotesTable);
router.post("/notesSeedData", seedNotesTableData);
router.get("/note/:noteId", getNote);

// TODOS
router.put("/todosTable", createFoldersTable);
router.post("/todosSeedData", seedFoldersTableData);
router.get("/todo/:todoId", getTodo);
