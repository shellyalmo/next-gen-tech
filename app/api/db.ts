import { sql } from "@vercel/postgres";
import { IJobSchema, IResumeSchema } from "./interfaces";
import { randomUUID } from "crypto";

export async function saveUserJunior(userId: string, userType: string) {
  await sql`INSERT INTO users (user_id,user_type)
  VALUES(${userId},${userType});`;
}

export async function saveNewResume(juniorId: string, resume: any) {
  await sql`INSERT INTO juniors (junior_id,resume) VALUES(${juniorId},${resume})
  ON CONFLICT (junior_id) DO UPDATE SET resume=${resume}`;
}
// select resume->'work'->'0'->'name' from juniors;

export async function saveUserRecruiter(userId: string, userType: string) {
  await sql`INSERT INTO users (user_id,user_type)
    VALUES(${userId},${userType});`;
}
export async function saveJob(
  recruiterId: string,
  job: object,
  jobId: string | any
) {
  await sql`INSERT INTO jobs (recruiter_id,job,job_id)
    VALUES(${recruiterId},${JSON.stringify(job)},${
    typeof jobId === "string" ? jobId : randomUUID()
  }) ON CONFLICT (job_id) DO UPDATE SET job=${JSON.stringify(job)};`;
}



// SELECT job->'skills'->0->>'name' FROM jobs;
// SELECT job->'Job Info'->'title' FROM jobs;

export async function readJobs() {
  return await sql<{
    job: IJobSchema;
    recruiter_id: string;
    job_id: string;
  }>`SELECT * from jobs;`;
}

//add one job read
export async function readJob(jobId: string) {
  return await sql<{
    job: IJobSchema;
    recruiter_id: string;
    job_id: string;
  }>`SELECT * from jobs where job_id=${jobId};`;
}

//check user type by user id
export async function readUserType(userId: string) {
  const queryResult = await sql<{
    user_type: "junior" | "recruiter";
  }>`SELECT user_type from users where user_id=${userId};`;
  return queryResult.rows[0].user_type;
}

export async function addApplicantToJob(userId: string, jobId: string) {
  await sql`UPDATE jobs
  SET applicants = ARRAY_APPEND(applicants, ${userId})
  WHERE job_id = ${jobId};  
  `;
}

export async function readResume(userId: string) {
  return await sql<{
    resume: IResumeSchema;
  }>`SELECT resume from juniors where junior_id=${userId};`;
}


