import express from "express";
import {
	createMeal,
	getMeals,
	getMeal,
	updateMeal,
	removeMeal,
} from "../controller/meal";

const router = express.Router();

router.get("/meals", getMeals);
router.get("/meal/:_id", getMeal);
router.post("/meal", createMeal);
router.put("/meal/:_id", updateMeal);
router.delete("/meal/:_id", removeMeal);

export default router;
