import express from "express";
import { createMeal } from "../controller/meal";

const router = express.Router();

router.get("/meal/all", createMeal);

export default router;
