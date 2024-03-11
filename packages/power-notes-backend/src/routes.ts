import express from "express";
import { getFolder, getFolders, getJournal, getNote, getTodo } from "./logic";
import {
    createFoldersTable,
    createJournalsTable,
    createNotesTable,
    createTodosTable,
    seedFoldersTableData,
    seedJournalsTableData,
    seedNotesTableData,
    seedTodosTableData,
} from "./seeding";

export const router = express.Router();

// FOLDERS
router.put("/foldersTable", createFoldersTable);
router.post("/foldersSeedData", seedFoldersTableData);
router.get("/folders", getFolders);
router.get("/folder/:folderId", getFolder);

// JOURNALS
router.put("/journalsTable", createJournalsTable);
router.post("/journalsSeedData", seedJournalsTableData);
router.get("/journal/:journalId", getJournal);

// NOTES
router.put("/notesTable", createNotesTable);
router.post("/notesSeedData", seedNotesTableData);
router.get("/note/:noteId", getNote);

// TODOS
router.put("/todosTable", createTodosTable);
router.post("/todosSeedData", seedTodosTableData);
router.get("/todo/:todoId", getTodo);
