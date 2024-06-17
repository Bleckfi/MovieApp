import dbConnect from "../../Server/mongo";
import User from "../../Server/scheme/users";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  await dbConnect();

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json({ exists: true, user });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при проверке пользователя" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { email, name, image, favorite } = await request.json();

  await dbConnect();

  try {
    const user = new User({ email, name, image, favorite: [] });
    await user.save();
    return NextResponse.json({ message: "Пользователь добавлен", user });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при добавлении пользователя" },
      { status: 500 }
    );
  }
}
