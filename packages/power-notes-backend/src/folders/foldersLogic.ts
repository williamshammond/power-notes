import { FolderDb, FolderInformation } from "@power-notes/power-notes-shared";
import { Request, Response } from "express";
import { db } from "../database";
import {
    createFolderQuery,
    getFolderAllColumnsById,
    getJournalsIdNameByParentId,
    getNotesIdNameByParentId,
    getSubFoldersIdNameByParentId,
    getTodosIdNameByParentId,
    updateFolderNameById,
} from "./foldersQueries";
import { v4 as uuidv4 } from "uuid";

export async function createFolder(req: Request, res: Response) {
    try {
        console.log(req.body);

        const { name, parentFolderId } = req.body;

        // Check if the parent folder exists
        if (parentFolderId) {
            const parentFolder = await db.one(getFolderAllColumnsById, [
                parentFolderId,
            ]);
            if (!parentFolder) {
                return res.status(400).json({
                    message: "Parent folder does not exist",
                });
            }
        }

        // Create new unique UUID for new folder
        const uuid = uuidv4();

        const userId = "730ea38e-993f-45f7-847a-3c3db81dedf0";

        await db.none(createFolderQuery, [uuid, name, parentFolderId, userId]);
        res.status(201).json({
            message: "Folder created",
        });
    } catch (error) {
        console.error("Error creating folder:", error);
        res.status(500).json({
            message: "Error creating folder",
            error,
        });
    }
}

//Write a function to update a folder by checking if it exists, first, then getting the folder by id and updating the name and parentFolderId
export async function updateFolder(req: Request, res: Response) {
    const { name } = req.body;

    console.log(req.body);

    try {
        const folder = await db.one(getFolderAllColumnsById, [
            req.params.folderId,
        ]);
        if (folder == null) {
            return res.status(400).json({
                message: "Folder does not exist",
            });
        }

        await db.none(updateFolderNameById, [name, req.params.folderId]);
        res.status(200).json({
            message: "Folder updated",
        });
    } catch (error) {
        console.error("Error updating folder:", error);
        res.status(500).json({
            message: "Error updating folder",
            error,
        });
    }
}

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
