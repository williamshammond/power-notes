import { Request, Response } from "express";
import { db } from "./database";

export async function getNote(req: Request, res: Response) {
    try {
        const notes = await db.any(
            "SELECT * FROM notes WHERE id = $1",
            req.params.id
        );
        res.status(200).json(notes);
    } catch (error) {
        throw new Error("Error getting notes");
    }
}

export async function getFolder(req: Request, res: Response) {
    try {
        const folder = await db.any(
            "SELECT * FROM public.folders WHERE id = $1::uuid",
            req.params.folderId
        );
        res.status(200).json(folder);
    } catch (error) {
        throw new Error("Error getting notes");
    }
}

export async function getFolders(_req: Request, res: Response) {
    try {
        const folder = await db.any(
            "SELECT * FROM public.folders WHERE userId = $1::uuid",
            "730ea38e-993f-45f7-847a-3c3db81dedf0"
        );
        res.status(200).json(folder);
    } catch (error) {
        throw new Error("Error getting folders for user");
    }
}

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

export async function getTodo(req: Request, res: Response) {
    try {
        const todo = await db.any(
            "SELECT * FROM public.todos WHERE id = $1::uuid",
            req.params.todoId
        );
        res.status(200).json(todo);
    } catch (error) {
        throw new Error("Error getting todo");
    }
}
