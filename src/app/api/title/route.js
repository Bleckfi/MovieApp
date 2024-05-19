import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";
await dbConnect();
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("_id");

  const animeList = await Title.find({ _id: id });
  return NextResponse.json(animeList);
}
