import express from "express";
import {
  CreateComputer,
  GetAllComputers,
  GetOneComputer,
} from "../Controls/ComputerControlers.js";
const router = express.Router();

router.get("/", GetAllComputers);
router.get("/:id", GetOneComputer);
router.post("/", CreateComputer);

export default router;
