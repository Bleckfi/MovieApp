import dbConnect from "../../Server/mongo";
import Title from "../../Server/scheme/anime";
import { NextResponse } from "next/server";

await dbConnect();

export async function GET() {
  try {
    const anime = await Title.find();
    return NextResponse.json(anime);
  } catch {}
}

export async function POST(req) {
  try {
    const { title, img } = await req.json();
    await Title.create({ title, img });
    return NextResponse.json(anime);
  } catch (err) {
    return NextResponse.json(err);
  }
}
