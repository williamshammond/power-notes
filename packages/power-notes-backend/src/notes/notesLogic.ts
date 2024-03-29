import { Request, Response } from "express";
import { db } from "../database";
import { getNoteAllColumnsById } from "./notesQueries";

export async function getNote(req: Request, res: Response) {
    try {
        if (req.params.noteId == null) {
            console.log(req.params);
            res.status(400).json({ message: "Note id is required" });
            return;
        }
        const notes = await db.one(getNoteAllColumnsById, [req.params.noteId]);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error getting note", error });
    }
}
