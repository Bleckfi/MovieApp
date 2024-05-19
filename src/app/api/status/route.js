import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";
await dbConnect();
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  try {
    const animeList = await Title.find({ status });
    return NextResponse.json(animeList);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при получении данных" },
      { status: 500 }
    );
  }
}
