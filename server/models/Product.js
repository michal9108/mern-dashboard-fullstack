import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: Number,
    expense: Number,
    transactions: [Schema.Types.ObjectId],
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
