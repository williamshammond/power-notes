import { Request, Response } from "express";
import { db } from "../database";
import { getNoteAllColumnsById } from "./todosQueries";

export async function getTodo(req: Request, res: Response) {
    try {
        const todo = await db.any(getNoteAllColumnsById, [req.params.todoId]);
        res.status(200).json(todo);
    } catch (error) {
        throw new Error("Error getting todo");
    }
}
