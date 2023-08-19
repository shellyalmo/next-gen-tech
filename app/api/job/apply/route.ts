import { addApplicantToJob } from "@/app/api/db";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const job = await request.json();
  const { userId } = auth();

  if (userId !== null) {
    addApplicantToJob(userId, job.job_id);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
