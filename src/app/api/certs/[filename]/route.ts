import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { filename: string } }) {
  const { filename } = params;

  const filePath = path.join(process.cwd(), "private_certs", filename);

  try {
    const file = await fs.readFile(filePath);
    return new NextResponse(file, {
      headers: { "Content-Type": "application/pdf" }
    });
  } catch (err) {
    return new NextResponse("File not found", { status: 404 });
  }
}
