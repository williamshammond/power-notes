import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { MOCK_FOLDERS_DATA, MOCK_USER_DATA } from "./mock-data/mockData";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({ testMessage: "Hello world!!!" });
});

app.get("/folders", (req: Request, res: Response) => {
    const folders = MOCK_USER_DATA;

    res.json({ folders: folders });
});

app.get("/folders/:folderId", (req: Request, res: Response) => {
    const folders = MOCK_USER_DATA;

    if (req.params.folderId) {
        res.json({ folder: MOCK_FOLDERS_DATA[req.params.folderId] });
    }

    res.json({ folders: folders });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
