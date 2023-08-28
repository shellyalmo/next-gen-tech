import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { saveUserJunior } from "../db";

export async function POST(request: Request) {
  const { userId } = auth();

  if (userId !== null) {
    try {
      await saveUserJunior(userId, "junior");
    } catch (error) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
