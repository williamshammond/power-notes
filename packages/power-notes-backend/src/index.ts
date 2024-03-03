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

dotenv.config({ path: ".env.local" });
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

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
