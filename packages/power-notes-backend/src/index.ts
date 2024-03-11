import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import { notesRouter } from "./notes/notesRoutes";
import { foldersRouter } from "./folders/foldersRoutes";
import { todosRouter } from "./todos/todosRoutes";
import { journalsRouter } from "./journals/journalsRoutes";

dotenv.config({ path: "../../.env.local" });
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/", (_req, res) => {
    res.json({ testMessage: "Hello world!!!" });
});

app.use("/folders/v1/", foldersRouter);
app.use("/journals/v1/", journalsRouter);
app.use("/notes/v1/", notesRouter);
app.use("/todos/v1/", todosRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
