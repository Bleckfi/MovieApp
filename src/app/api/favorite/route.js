import dbConnect from "../../Server/mongo";
import User from "../../Server/scheme/users";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { email, animeId } = await request.json();

  await dbConnect();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (!user.favorite.includes(animeId)) {
      user.favorite.push(animeId);
      await user.save();
    }

    return NextResponse.json({ message: "Anime added to favorites", user });
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding anime to favorites" },
      { status: 500 }
    );
  }
}
