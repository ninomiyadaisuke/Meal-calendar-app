import { Schema, model } from "mongoose";
import IMeal from "../documents/mealDocument";

const mealSchema: Schema = new Schema({
	day: {
		type: Date,
		required: true,
	},
	menu: {
		type: Array,
		required: true,
	},
	userCount: {
		type: Number,
		//required: true,
		default: 0,
	},
	shopping: {
		type: Array,
		default: [String],
	},
});

const Meal = model<IMeal>("Meal", mealSchema);

export default Meal;
