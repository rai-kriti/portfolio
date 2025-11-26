import { promises as fs } from "fs";
import path from "path";
import { NextResponse, type NextRequest } from "next/server";

// NEW: use NextRequest + type RouteParams
export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;

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
