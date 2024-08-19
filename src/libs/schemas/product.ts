import mongoose from "mongoose";
//schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
//end
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
