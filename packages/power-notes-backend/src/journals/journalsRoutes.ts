import express from "express";
import { getJournal } from "./journalsLogic";
import { createJournalsTable, seedJournalsTableData } from "./journalsSeeding";

export const journalsRouter = express.Router();

// JOURNALS
journalsRouter.put("/journalsTable", createJournalsTable);
journalsRouter.post("/journalsSeedData", seedJournalsTableData);
journalsRouter.get("/journal/:journalId", getJournal);
