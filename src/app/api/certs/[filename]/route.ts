import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const filename = context.params.filename;

  const filePath = path.join(process.cwd(), "private_certs", filename);

  try {
    const file = await fs.readFile(filePath);
    return new NextResponse(file, {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}
