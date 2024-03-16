import { Request, Response } from "express";
import { db } from "../database";
import { getJournalAllColumnsById } from "./journalsQueries";

export async function getJournal(req: Request, res: Response) {
    try {
        const journal = await db.any(getJournalAllColumnsById, [
            req.params.journalId,
        ]);
        res.status(200).json(journal);
    } catch (error) {
        throw new Error("Error getting journal");
    }
}
