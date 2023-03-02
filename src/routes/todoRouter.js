import { Router } from "express";
import { todoController } from "../controllers/todo.js";

export const todoRouter = Router();
todoRouter.get("/getAll", todoController.getTodos);
todoRouter.post("/new", todoController.postTodo);
todoRouter.delete("/delete/:id", todoController.deleteTodo);
todoRouter.put("/edit/:id", todoController.editTodo);