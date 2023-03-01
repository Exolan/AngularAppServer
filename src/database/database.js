import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = "test";

await client.connect();
console.log("Success");
const db = client.db(dbName);

export const collection = db.collection('todo');