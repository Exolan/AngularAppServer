import path from "path";
import fs from "fs";
import multer from "multer";
import { GridFSBucket } from "mongodb";
import { db } from "../database/database.js";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "src/uploads/");
	},
	filename: function (req, file, cb) {
		let ext = path.extname(file.originalname);
		let filename = Date.now() + ext;
		cb(null, filename);
	},
});

export const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
			cb(null, true);
		} else {
			console.log("Wrong file extension");
			cb(null, false);
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 10,
	},
});

const bucket = new GridFSBucket(db, { bucketName: "fileBucket" });

export function uploadBucket(filename) {
	console.log("bucket: ", filename);
	fs.createReadStream(`src/uploads/${filename}`).pipe(
		bucket.openUploadStream(filename)
	);
}
