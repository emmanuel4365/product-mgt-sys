import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PRODUCT", ProductSchema);
