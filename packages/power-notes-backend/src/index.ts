import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({ testMessage: "Hello world!!!" });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
