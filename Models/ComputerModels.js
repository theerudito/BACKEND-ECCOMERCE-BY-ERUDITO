import mongoose from "mongoose";

const Schema = mongoose.Schema;

const computerShema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    adictional: { type: String },
    marc: { type: String },
    price: { type: Double },
    priceDesc: { type: Double },
    desc: { type: Double },
    star: { type: String },
    pic1: { type: String },
    pic2: { type: String },
    pic3: { type: String },
  },
  { versionKey: false }
);

export default mongoose.model("Computer", computerShema);
