import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";
await dbConnect();

export async function GET() {
  const anime = await Title.find();
  return NextResponse.json(anime);
}

export async function POST(req) {
  try {
    const animeData = await req.json();

    const requiredFields = [
      "title",
      "japTitle",
      "img",
      "status",
      "rate",
      "desc",
      "poster",
      "genre",
      "type",
      "episodes",
    ];
    for (const field of requiredFields) {
      if (!animeData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    const anime = await Title.create(animeData);
    return NextResponse.json(anime);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
