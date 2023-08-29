import { NextResponse } from "next/server";
import { saveNewJob } from "../db";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const job = await request.json();
  const { userId } = auth();

  if (userId !== null) {
    saveNewJob(userId, job);
    //save job to table
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}

// TODO: function PUT for edit job id
