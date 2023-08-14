import { sql } from "@vercel/postgres";

export async function saveUserJunior(
  userId: string,
  userType: string,
  resume: any
) {
  await sql`INSERT INTO users (user_id,user_type)
  VALUES(${userId},${userType});`;
  await sql`INSERT INTO juniors (junior_id,resume)
  VALUES(${userId},${resume});`;
}
// select resume->'work'->'0'->'name' from juniors;

export async function saveUserRecruiter(
  userId: string,
  userType: string,
  job: any
) {
  await sql`INSERT INTO users (user_id,user_type)
    VALUES(${userId},${userType});`;
  await sql`INSERT INTO jobs (recruiter_id,job)
    VALUES(${userId},${job});`;
}
// SELECT job->'skills'->0->>'name' FROM jobs;
// SELECT job->'Job Info'->'title' FROM jobs;

export async function readJobs() {
  return await sql`SELECT * from jobs;`;
}
//add one job read
