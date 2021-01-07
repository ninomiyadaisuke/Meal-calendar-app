import { Request, Response } from "express";

export const createMeal = (req: Request, res: Response) => {
	res.json({
		data: "hello Team A!!! from meal all",
	});
};
