import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    favorite: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    name: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
