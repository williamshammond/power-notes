import { Request, Response } from "express";
import { db } from "../database";

export async function getJournal(req: Request, res: Response) {
    try {
        const journal = await db.any(
            "SELECT * FROM public.journals WHERE id = $1::uuid",
            req.params.journalId
        );
        res.status(200).json(journal);
    } catch (error) {
        throw new Error("Error getting journal");
    }
}
