import mongoose from "mongoose";

const titleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

export default mongoose.models.Title || mongoose.model("Title", titleSchema);
