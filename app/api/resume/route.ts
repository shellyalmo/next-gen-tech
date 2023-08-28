import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { readResume, saveNewResume } from "../db";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const { userId } = auth();
  const resume = await request.json();

  if (userId !== null) {
    try {
      await saveNewResume(userId, resume);
    } catch (error) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}

export async function GET() {
  const { userId } = auth();
  if (userId === null) {
    redirect("/");
  } else {
    return NextResponse.json(await readResume(userId));
  }
}
