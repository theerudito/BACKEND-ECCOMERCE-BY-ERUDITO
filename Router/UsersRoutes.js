import express from "express";
import { createUser, getAllUsers } from "../Controls/UsersControles.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);

export default userRouter;
