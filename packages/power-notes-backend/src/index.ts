import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import { router } from "./routes";

dotenv.config({ path: "../../.env.local" });
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/", (_req, res) => {
    res.json({ testMessage: "Hello world!!!" });
});

app.use("/api/v1/", router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
