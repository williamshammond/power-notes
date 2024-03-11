import { Request, Response } from "express";
import { db } from "../database";
import { MOCK_NOTES_DATA } from "../mock-data/mockData";

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
