import { Request, Response } from "express";
import { db } from "../database";
import { MOCK_JOURNALS_DATA } from "../mock-data/mockData";

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
