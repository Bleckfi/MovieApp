import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";

await dbConnect();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("material_data.anime_kind");
  try {
    const animeList = await Title.aggregate([
      { $match: { "material_data.anime_kind": status } },
      { $group: { _id: "$title", doc: { $first: "$$ROOT" } } },
      { $replaceRoot: { newRoot: "$doc" } },
      { $limit: 20 },
    ]);
    return await NextResponse.json(animeList);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при получении данных" },
      { status: 500 }
    );
  }
}
