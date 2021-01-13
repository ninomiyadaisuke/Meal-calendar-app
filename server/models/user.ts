import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
});

const User = model("User", userSchema);

export default User;
