import { Request, Response } from "express";
import { db } from "../database";
import { MOCK_TODOS_DATA } from "../mock-data/mockData";

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
