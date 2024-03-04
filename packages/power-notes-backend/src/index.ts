import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import {
    MOCK_FOLDERS_DATA,
    MOCK_FULL_FOLDER_DATA,
    MOCK_JOURNALS_DATA,
    MOCK_NOTES_DATA,
    MOCK_TODOS_DATA,
} from "./mock-data/mockData";
import pgPromise from "pg-promise";

dotenv.config({ path: "../../.env.local" });
dotenv.config();

const pgp = pgPromise();

const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? ""),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

console.log("Connecting to DB with:", dbConfig);

const db = pgp(dbConfig);

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.post("/setupTable", async (req: Request, res: Response) => {
    try {
        const checkTableExists = await db.oneOrNone(
            "SELECT to_regclass('public.my_table')"
        );

        if (checkTableExists.to_regclass) {
            await db.none("DROP TABLE public.my_table");
        }

        await db.none(`
            CREATE TABLE public.my_table (
                name VARCHAR(255),
                value INTEGER
            )
        `);

        await db.tx((t) => {
            const queries = [
                t.none(
                    "INSERT INTO public.my_table(name, value) VALUES($1, $2)",
                    ["test1", 123]
                ),
                t.none(
                    "INSERT INTO public.my_table(name, value) VALUES($1, $2)",
                    ["test2", 456]
                ),
            ];
            return t.batch(queries);
        });

        res.json({ message: "Table created and seeded successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Setup failed", error });
    }
});

app.get("/", (req: Request, res: Response) => {
    res.json({ testMessage: "Hello world!!!" });
});

app.get("/folders", (_req: Request, res: Response) => {
    res.json(MOCK_FULL_FOLDER_DATA);
});

app.get("/folders/:folderId", (req: Request, res: Response) => {
    if (req.params.folderId) {
        res.json({ folder: MOCK_FOLDERS_DATA[req.params.folderId] });
    }

    throw new Error("Folder not found");
});

app.get("/note/:noteId", (req: Request, res: Response) => {
    if (
        req.params.noteId != null &&
        MOCK_NOTES_DATA[req.params.noteId] != null
    ) {
        res.json(MOCK_NOTES_DATA[req.params.noteId]);
    } else {
        return res.json({ Message: "Note not found" });
    }
});

app.get("/todo/:todoId", (req: Request, res: Response) => {
    if (req.params.todoId && MOCK_TODOS_DATA[req.params.todoId] != null) {
        res.json(MOCK_TODOS_DATA[req.params.todoId]);
    }

    throw new Error("Todo List not found");
});

app.get("/journal/:journalId", (req: Request, res: Response) => {
    if (
        req.params.journalId &&
        MOCK_JOURNALS_DATA[req.params.journalId] != null
    ) {
        res.json(MOCK_JOURNALS_DATA[req.params.journalId]);
    }
    throw new Error("Journal not found");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
