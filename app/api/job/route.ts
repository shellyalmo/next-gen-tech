import { NextResponse } from "next/server";
import { saveJob } from "../db";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const { formData, jobId } = await request.json();
  const { userId } = auth();

  if (userId !== null) {
    try {
      await saveJob(userId, formData, jobId);
      //save job to table
      return NextResponse.json({ success: true });
    } catch (error) {
      return NextResponse.json(
        { success: false, error: error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
