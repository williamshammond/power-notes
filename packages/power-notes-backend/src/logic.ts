import { Request, Response } from "express";
import { db } from "./database";

export const getNote = async (req: Request, res: Response) => {
    try {
        const notes = await db.any(
            "SELECT * FROM notes WHERE id = $1",
            req.params.id
        );
        res.status(200).json(notes);
    } catch (error) {
        throw new Error("Error getting notes");
    }
};

export const getFolder = async (req: Request, res: Response) => {
    try {
        const folder = await db.any(
            "SELECT * FROM public.folders WHERE id = $1::uuid",
            req.params.folderId
        );
        res.status(200).json(folder);
    } catch (error) {
        throw new Error("Error getting notes");
    }
};

export const getFolders = async (_req: Request, res: Response) => {
    try {
        const folder = await db.any(
            "SELECT * FROM public.folders WHERE userId = $1::uuid",
            "730ea38e-993f-45f7-847a-3c3db81dedf0"
        );
        res.status(200).json(folder);
    } catch (error) {
        throw new Error("Error getting folders for user");
    }
};
