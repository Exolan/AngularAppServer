import { todoService } from "../services/todo.js";

async function getTodos(req, res){
    const response = await todoService.getTodos();
    res.json(response);
}

export const todoController = {
    getTodos
}