import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { PORT, DATABASE, defaultPath } from "./config";
import MealRouter from "./routes/meal";
import ShoppingRouter from "./routes/shopping";

//app
const app = express();

//db
mongoose
	.connect(DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED!!!"))
	.catch((err) => console.log("DB NOT CONNECT", err));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//routes
app.use(defaultPath, MealRouter);
app.use(defaultPath, ShoppingRouter);

//port
const port = PORT || 8000;

//server
app.listen(port, () => console.log(`localhost${port}で起動中・・・`));
