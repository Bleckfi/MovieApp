import mongoose from "mongoose";
import { type } from "os";

const titleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    japTitle: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    episodes: {
      episode: [
        {
          season: { type: Number, required: true },
          episodeNum: { type: Number, required: true },
          src: { type: String, required: true },
          translationName: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Title || mongoose.model("Title", titleSchema);
