import express from "express";
import {
  CreateComputer,
  GetAllComputers,
  GetOneComputer,
} from "../Controls/ComputerControlers.js";

const productRouter = express.Router();

productRouter.get("/", GetAllComputers);
productRouter.get("/:id", GetOneComputer);
productRouter.post("/", CreateComputer);

export default productRouter;
