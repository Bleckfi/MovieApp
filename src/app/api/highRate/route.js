import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";
await dbConnect();
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const rate = searchParams.get("material_data.shikimori_rating");
  try {
    const animeList = await Title.aggregate([
      { $unwind: "$material_data" },
      { $match: { "material_data.shikimori_rating": { $gt: Number(rate) } } },
      { $group: { _id: "$title", doc: { $first: "$$ROOT" } } },
      { $replaceRoot: { newRoot: "$doc" } },
      { $limit: 20 },
    ]);
    return NextResponse.json(animeList);
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при получении данных" },
      { status: 500 }
    );
  }
}
