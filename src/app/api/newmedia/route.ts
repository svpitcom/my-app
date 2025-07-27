import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const filePath = path.join(process.cwd(), "src/data/newmedia.json");

export async function GET() {
  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  const newItem = { id: uuid(), ...body };
  data.push(newItem);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(newItem, { status: 201 });
}
