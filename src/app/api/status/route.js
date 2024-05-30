import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";
await dbConnect();
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("material_data.anime_status");
  try {
    const animeList = await Title.find({
      "material_data.anime_status": status,
    }).limit(5);
    return NextResponse.json(animeList);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при получении данных" },
      { status: 500 }
    );
  }
}
