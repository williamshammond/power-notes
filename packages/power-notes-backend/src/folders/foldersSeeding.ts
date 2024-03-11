import { Request, Response } from "express";
import { db } from "../database";
import { MOCK_FOLDER_DATA } from "../mock-data/mockData";

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
