import express from "express";
import {
	createShopping,
	getShoppings,
	getShopping,
	updateShopping,
	removeShopping,
} from "../controller/shopping";

const router = express.Router();

router.get("/shoppings", getShoppings);
router.get("/shopping/:_id", getShopping);
router.post("/shopping", createShopping);
router.put("/shopping/:_id", updateShopping);
router.delete("/shopping/:_id", removeShopping);

export default router;
