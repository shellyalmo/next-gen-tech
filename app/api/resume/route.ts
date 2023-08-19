import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { saveNewResume } from "../db";


export async function POST(request: Request) {
  const resume = await request.json();
  const { userId } = auth();

  if (userId !== null) {
    saveNewResume(userId, resume);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
