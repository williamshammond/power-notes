import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });
dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server test change");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
