import { Request, Response } from "express";
import { db } from "./database";
import { MOCK_JOURNALS_DATA, MOCK_TODOS_DATA } from "./mock-data/mockData";

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

export function getTodo(req: Request, res: Response) {
    if (req.params.todoId && MOCK_TODOS_DATA[req.params.todoId] != null) {
        res.json(MOCK_TODOS_DATA[req.params.todoId]);
    }

    throw new Error("Todo List not found");
}

export function getJournal(req: Request, res: Response) {
    if (
        req.params.journalId &&
        MOCK_JOURNALS_DATA[req.params.journalId] != null
    ) {
        res.json(MOCK_JOURNALS_DATA[req.params.journalId]);
    }
    throw new Error("Journal not found");
}
