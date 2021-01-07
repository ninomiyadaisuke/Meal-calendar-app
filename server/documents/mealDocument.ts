import { Document } from "mongoose";

export default interface IMeal extends Document {
	day: Date;
	menu: string[];
	userCount: number;
	shopping: string[];
}
