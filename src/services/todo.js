import { collection } from "../database/database.js";
import { ObjectId } from "mongodb";

async function getTodos() {
	let response = await collection.find({}).toArray();
	return response;
}

async function postTodo(title, content) {
	let response = await collection.insertOne({ title, content });
	return response;
}

async function deleteTodo(id) {
	let response = await collection.deleteOne({
		_id: new ObjectId(id),
	});
	return response;
}

async function editTodo(id, title, content){
	let query = {_id: id};
	let replacement = {title, content}
	let response = await collection.replaceOne(query, replacement);
	return response;
}

export const todoService = {
	getTodos,
	postTodo,
	deleteTodo,
	editTodo
};
