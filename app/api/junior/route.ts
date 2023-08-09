import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { saveUserJunior } from "../db";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request: Request) {
  const resume = await request.json();
  const { userId } = auth();

  if (userId !== null) {
    saveUserJunior(userId, "junior", resume);
    //save resume to table
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
