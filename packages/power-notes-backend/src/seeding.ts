import { db } from "./database";
import { Request, Response } from "express";
import {
    MOCK_FOLDER_DATA,
    MOCK_JOURNALS_DATA,
    MOCK_NOTES_DATA,
    MOCK_TODOS_DATA,
} from "./mock-data/mockData";

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
          parentFolderId UUID,
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
                    "INSERT INTO public.folders(id, name, parentFolderId, userId) VALUES($1, $2, $3::uuid, $4::uuid)",
                    [
                        folder.id,
                        folder.name,
                        folder.praentFolderId,
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
          content TEXT,
          id UUID PRIMARY KEY,
          name VARCHAR(255),
          parentFolderId UUID
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
                    "INSERT INTO public.notes(content, id, name, parentFolderId) VALUES($1, $2::uuid, $3, $4::uuid)",
                    [note.content, note.id, note.name, note.parentFolderId]
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

export async function createTodosTable(req: Request, res: Response) {
    try {
        const tableExists = await db.oneOrNone(
            "SELECT to_regclass('public.todos')"
        );
        if (tableExists) {
            await db.none("DROP TABLE IF EXISTS public.todos");
        }

        await db.none(`
        CREATE TABLE public.todos (
            content TEXT,
            id UUID PRIMARY KEY,
            name VARCHAR(255),
            parentFolderId UUID
        )
      `);

        res.json({ message: "Table created successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Table creation failed", error });
    }
}

export async function seedTodosTableData(_req: Request, res: Response) {
    try {
        await db.tx((t) => {
            const queries = MOCK_TODOS_DATA.map((todo) => {
                return t.none(
                    "INSERT INTO public.todos(content, id, name, parentFolderId) VALUES($1, $2::uuid, $3, $4::uuid)",
                    [todo.content, todo.id, todo.name, todo.parentFolderId]
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

export async function createJournalsTable(req: Request, res: Response) {
    try {
        const tableExists = await db.oneOrNone(
            "SELECT to_regclass('public.journals')"
        );
        if (tableExists) {
            await db.none("DROP TABLE IF EXISTS public.journals");
        }

        await db.none(`
        CREATE TABLE public.journals (
            content TEXT,
            id UUID PRIMARY KEY,
            name VARCHAR(255),
            parentFolderId UUID
        )
      `);

        res.json({ message: "Table created successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Table creation failed", error });
    }
}

export async function seedJournalsTableData(_req: Request, res: Response) {
    try {
        await db.tx((t) => {
            const queries = MOCK_JOURNALS_DATA.map((journal) => {
                return t.none(
                    "INSERT INTO public.journals(content, id, name, parentFolderId) VALUES($1, $2::uuid, $3, $4::uuid)",
                    [
                        journal.content,
                        journal.id,
                        journal.name,
                        journal.parentFolderId,
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
