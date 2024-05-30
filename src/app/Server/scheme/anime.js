import mongoose from "mongoose";
import { type } from "os";

const titleSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    title_orig: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },

    worldart_link: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    material_data: [
      {
        shikimori_rating: {
          type: Number,
          required: true,
        },
        anime_genres: [],
        screenshots: [],
        poster_url: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        anime_description: {
          type: String,
          required: true,
        },
        anime_status: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Title || mongoose.model("Title", titleSchema);
