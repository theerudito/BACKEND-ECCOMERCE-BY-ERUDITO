import express from "express";
import { AllUsers, Login, Register } from "../Controls/UsersControles.js";

const userRouter = express.Router();

// Create a new user

userRouter.get("/register", AllUsers);
userRouter.post("/register", Register);
userRouter.post("/login", Login);

export default userRouter;
