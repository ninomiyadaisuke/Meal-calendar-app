import { Request, Response } from "express";
import Shopping from "../models/shopping";


export const getShoppings = async(req: Request, res: Response) => {
  const shoppings = await Shopping.find({}).exec()
  res.json(shoppings)
} 

export const getShopping = () => {
  
} 

export const createShopping = async (req: Request, res: Response) => {
	try {
		//const { menus } = req.body;
		const setShopping = await new Shopping(req.body).save();
		console.log(setShopping);
		res.json(setShopping);
	} catch (err) {
		res.status(400).send("Create Error!!");
		console.log(err);
	}
};

export const updateShopping = () => {
  //
} 

export const removeShopping = () => {
  //
} 