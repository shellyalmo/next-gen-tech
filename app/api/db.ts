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
