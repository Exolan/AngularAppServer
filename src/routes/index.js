import { Router } from "express";
import { todoRouter } from "./todoRouter.js";

export const appRouter = Router();
appRouter.use("/todo", todoRouter);
