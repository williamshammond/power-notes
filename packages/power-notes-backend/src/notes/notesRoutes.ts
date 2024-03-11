import express from "express";
import { getNote } from "./notesLogic";
import { createNotesTable, seedNotesTableData } from "./notesSeeding";

export const notesRouter = express.Router();

notesRouter.put("/notesTable", createNotesTable);
notesRouter.post("/notesSeedData", seedNotesTableData);
notesRouter.get("/note/:noteId", getNote);
