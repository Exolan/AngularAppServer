import { Router } from "express";
import { todoController } from "../controllers/todo.js";

export const todoRouter = Router();
todoRouter.get('/getAll', todoController.getTodos);