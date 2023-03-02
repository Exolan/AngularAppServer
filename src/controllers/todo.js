import { upload, uploadBucket } from "../middleware/upload.js";
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

async function deleteTodo(req, res) {
	const { id } = req.params;
	const response = await todoService.deleteTodo(id);
	res.json(response);
}

async function editTodo(req, res) {
	const { id } = req.params;
	const { title, content } = req.body;
	const response = await todoService.editTodo(id, title, content);
	res.json(response);
}

async function uploadImage(req, res) {
	uploadBucket(req.file.filename);
	res.json(req.file.filename);
}

export const todoController = {
	getTodos,
	postTodo,
	deleteTodo,
	editTodo,
	uploadImage,
};
