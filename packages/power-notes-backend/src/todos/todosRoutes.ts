import express from "express";
import { getTodo } from "./todosLogic";
import { createTodosTable, seedTodosTableData } from "./todosSeeding";

export const todosRouter = express.Router();

todosRouter.put("/todosTable", createTodosTable);
todosRouter.post("/todosSeedData", seedTodosTableData);
todosRouter.get("/todo/:todoId", getTodo);
