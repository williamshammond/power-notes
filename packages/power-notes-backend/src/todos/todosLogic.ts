import { Request, Response } from "express";
import { db } from "../database";

export async function getTodo(req: Request, res: Response) {
    try {
        const todo = await db.any(
            "SELECT * FROM public.todos WHERE id = $1::uuid",
            req.params.todoId
        );
        res.status(200).json(todo);
    } catch (error) {
        throw new Error("Error getting todo");
    }
}
