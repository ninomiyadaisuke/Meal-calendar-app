import { Schema, model } from "mongoose";

const shoppingSchema: Schema = new Schema({
  item: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})

const Shopping = model("Shopping", shoppingSchema);

export default Shopping;