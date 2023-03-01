import {collection} from '../database/database.js';

async function getTodos(){
    let response = await collection.find({}).toArray()
    console.log(response);
    return response;
}

async function postTodo(){

}

async function deleteTodo(){

}

export const todoService = {
    getTodos,
    postTodo,
    deleteTodo
}