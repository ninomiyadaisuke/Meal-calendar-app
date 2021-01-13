import { Request, Response } from "express";
import Meal from "../models/meal";

export const getMeals = async (req: Request, res: Response) => {
	const meals = await Meal.find({}).exec();
	res.json(meals);
};

export const getMeal = async (req: Request, res: Response) => {
	try {
		const meal = await Meal.findOne({ _id: req.params._id }).exec();
		res.json(meal);
	} catch (err) {
		console.error(err);
		res.status(400).send("not found meal");
	}
};

export const createMeal = async (req: Request, res: Response) => {
	try {
		//const { menus } = req.body;
		const setMeal = await new Meal(req.body).save();
		console.log(setMeal);
		res.json(setMeal);
	} catch (err) {
		res.status(400).send("Create Error!!");
		console.log(err);
	}
};

export const updateMeal = async (req: Request, res: Response) => {
	try {
		const updated = await Meal.findOneAndUpdate(
			{ _id: req.params._id },
			req.body,
			{ new: true }
		).exec();
		res.json(updated);
	} catch (err) {
		res.status(400).send("Processing failed");
	}
};

export const removeMeal = async (req: Request, res: Response) => {
	try {
		const deleted = await Meal.findOneAndDelete({ _id: req.params._id });
		res.json(deleted);
	} catch (err) {
		console.error(err);
		res.status(400).send("Processing failed");
	}
};
