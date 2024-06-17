import dbConnect from "../../Server/mongo";
import User from "../../Server/scheme/users";

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, animeId } = req.body;

  await dbConnect();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.favorite.includes(animeId)) {
      user.favorite.push(animeId);
      await user.save();
    }

    return res.status(200).json({ message: "Anime added to favorites", user });
  } catch (error) {
    console.error("Error adding anime to favorites:", error);
    return res.status(500).json({ message: "Error adding anime to favorites" });
  }
}
