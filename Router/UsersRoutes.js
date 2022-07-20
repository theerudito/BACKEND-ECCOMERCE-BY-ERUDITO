import express from "express";
import { Login, Register } from "../Controls/UsersControles.js";

const userRouter = express.Router();

// Create a new user

userRouter.post("/register", Register);
userRouter.post("/login", Login);

export default userRouter;
