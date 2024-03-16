import { FolderDb, FolderInformation } from "@power-notes/power-notes-shared";
import { Request, Response } from "express";
import { db } from "../database";
import {
    getFolderAllColumnsById,
    getJournalsIdNameByParentId,
    getNotesIdNameByParentId,
    getSubFoldersIdNameByParentId,
    getTodosIdNameByParentId,
} from "./foldersQueries";

export async function getFolder(req: Request, res: Response) {
    try {
        const folder = await db.one(getFolderAllColumnsById, [
            req.params.folderId,
        ]);
        res.status(200).json(folder);
    } catch (error) {
        throw new Error("Error getting folder");
    }
}

async function fetchSubfolders(folderId: string) {
    return db.any(getSubFoldersIdNameByParentId, [folderId]);
}

async function fetchNotes(folderId: string) {
    return db.any(getNotesIdNameByParentId, [folderId]);
}

async function fetchTodos(folderId: string) {
    return db.any(getTodosIdNameByParentId, [folderId]);
}

async function fetchJournals(folderId: string) {
    return db.any(getJournalsIdNameByParentId, [folderId]);
}

async function constructFolderTree(
    folder: FolderDb
): Promise<FolderInformation> {
    const subfolders = await fetchSubfolders(folder.id);
    const notes = await fetchNotes(folder.id);
    const todos = await fetchTodos(folder.id);
    const journals = await fetchJournals(folder.id);

    const fullSubFolders: FolderInformation[] = [];

    for (let subfolder of subfolders) {
        subfolder = await constructFolderTree(subfolder); // Recursive call to construct sub-tree
        fullSubFolders.push(subfolder);
    }

    return {
        ...folder,
        journals: journals ?? [],
        notes: notes ?? [],
        subfolders: fullSubFolders ?? [],
        todos: todos ?? [],
    };
}

export async function getFolders(req: Request, res: Response) {
    try {
        const topLevelFolders = await db.any(
            "SELECT id, name FROM public.folders WHERE userId = $1::uuid AND parentFolderId IS NULL",
            "730ea38e-993f-45f7-847a-3c3db81dedf0"
        );

        const foldersWithDetails = [];
        for (const folder of topLevelFolders) {
            foldersWithDetails.push(await constructFolderTree(folder));
        }

        res.status(200).json(foldersWithDetails);
    } catch (error) {
        console.error("Error getting folders for user:", error);
        res.status(500).json({
            message: "Error getting folders for user",
            error,
        });
    }
}
