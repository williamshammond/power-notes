import express, { Request, Response } from "express";
import { getFolder, getFolders, getNote } from "./logic";
import { MOCK_JOURNALS_DATA, MOCK_TODOS_DATA } from "./mock-data/mockData";
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
router.get("/todo/:todoId", (req: Request, res: Response) => {
    if (req.params.todoId && MOCK_TODOS_DATA[req.params.todoId] != null) {
        res.json(MOCK_TODOS_DATA[req.params.todoId]);
    }

    throw new Error("Todo List not found");
});

// JOURNALS
router.get("/journal/:journalId", (req: Request, res: Response) => {
    if (
        req.params.journalId &&
        MOCK_JOURNALS_DATA[req.params.journalId] != null
    ) {
        res.json(MOCK_JOURNALS_DATA[req.params.journalId]);
    }
    throw new Error("Journal not found");
});
