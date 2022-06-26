import mongoose from "mongoose";

const Schema = mongoose.Schema;

const computerShema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    adictional: { type: String, require: true },
    marc: { type: String, require: true },
    price: { type: String, require: true },
    priceDesc: { type: String, require: true },
    priceTotal: { type: String, require: true },
    total: { type: String, require: true },
    stock: { type: String, require: true },
    desc: { type: String, require: true },
    star: { type: String },
    pic1: { type: String, require: true },
    pic2: { type: String, require: true },
    pic3: { type: String, require: true },
    pic4: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Computer", computerShema);
