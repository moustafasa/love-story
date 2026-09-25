import { model, Schema, models } from "mongoose";
import { Memory } from "../addImages/types";

const memoriesSchema = new Schema<Memory>({
  title: String,
  date: String,
  story: String,
  images: [String],
});

export default models.Memorie || model<Memory>("Memorie", memoriesSchema);
