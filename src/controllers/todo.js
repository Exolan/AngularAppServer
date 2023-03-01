import { todoService } from "../services/todo.js";

async function getTodos(req, res) {
	const response = await todoService.getTodos();
	res.json(response);
}

async function postTodo(req, res) {
	const { title, content } = req.body;
	const response = await todoService.postTodo(title, content);
	res.json(response);
}

export const todoController = {
	getTodos,
	postTodo,
};
