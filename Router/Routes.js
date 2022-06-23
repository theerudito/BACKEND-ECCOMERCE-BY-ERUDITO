import express from "express";
import {
  CreateComputer,
  GetAllComputers,
} from "../Controls/ComputerControlers.js";
const router = express.Router();

router.get("/", GetAllComputers);
router.get("/:id");
router.post("/", CreateComputer);

export default router;
