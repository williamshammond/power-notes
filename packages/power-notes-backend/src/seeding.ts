import { db } from "./database";
import { Request, Response } from "express";
import { MOCK_FOLDER_DATA, MOCK_NOTES_DATA } from "./mock-data/mockData";

export async function createFoldersTable(req: Request, res: Response) {
    try {
        const tableExists = await db.oneOrNone(
            "SELECT to_regclass('public.folders')"
        );
        if (tableExists) {
            await db.none("DROP TABLE IF EXISTS public.folders");
        }

        await db.none(`
        CREATE TABLE public.folders (
          id UUID PRIMARY KEY,
          name VARCHAR(255),
          subfolders UUID[],
          notes UUID[],
          todos UUID[],
          journals UUID[],
          userId UUID
        )
      `);

        res.json({ message: "Table created successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Table creation failed", error });
    }
}

export async function seedFoldersTableData(_req: Request, res: Response) {
    try {
        await db.tx((t) => {
            const queries = MOCK_FOLDER_DATA.map((folder) => {
                return t.none(
                    "INSERT INTO public.folders(id, name, subfolders, notes, journals, todos, userId) VALUES($1, $2, $3::uuid[], $4::uuid[], $5::uuid[], $6::uuid[], $7::uuid)",
                    [
                        folder.id,
                        folder.name,
                        folder.subfolderIds,
                        folder.noteIds,
                        folder.journalIds,
                        folder.todoIds,
                        folder.userId,
                    ]
                );
            });
            return t.batch(queries);
        });

        res.json({ message: "Data seeded successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Data seeding failed", error });
    }
}

export async function createNotesTable(req: Request, res: Response) {
    try {
        const tableExists = await db.oneOrNone(
            "SELECT to_regclass('public.notes')"
        );
        if (tableExists) {
            await db.none("DROP TABLE IF EXISTS public.notes");
        }

        await db.none(`
        CREATE TABLE public.notes (
          id UUID PRIMARY KEY,
          name VARCHAR(255),
          content TEXT
        )
      `);

        res.json({ message: "Table created successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Table creation failed", error });
    }
}

export async function seedNotesTableData(_req: Request, res: Response) {
    try {
        await db.tx((t) => {
            const queries = MOCK_NOTES_DATA.map((note) => {
                return t.none(
                    "INSERT INTO public.notes(id, name, content) VALUES($1, $2, $3)",
                    [note.id, note.name, note.content]
                );
            });
            return t.batch(queries);
        });

        res.json({ message: "Data seeded successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Data seeding failed", error });
    }
}
