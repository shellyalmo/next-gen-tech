import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { saveUserRecruiter } from "../db";

export async function POST(request: Request) {
  const { userId } = auth();

  if (userId !== null) {
    saveUserRecruiter(userId, "recruiter");
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
