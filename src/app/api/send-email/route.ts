import { NextResponse } from "next/server";

export async function GET() {
  // redirect to your latest Google Drive resume
  return NextResponse.redirect("https://drive.google.com/file/d/16JRbtJjmHAXkAghOijU3YPUWby_Tn9Og/view?usp=sharing");
}
