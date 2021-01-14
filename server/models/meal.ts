import { Schema, model } from "mongoose";

const mealSchema: Schema = new Schema({
	main: {
		type: String,
		required: true,
	},
	rice: {
		type: String,
		required: true,
	},
	soup: {
		type: String,
	},
	sideMenu1: String,
	sideMenu2: String,
	sideMenu3: String,
	userCount: {
		type: Number,
		default: 0,
	},
	shopping: {
		type: [
			{
				item: String,
				count: Number,
			},
		],
		default: [],
	},
});

const Meal = model("Meal", mealSchema);

export default Meal;
