import { UserButton, auth } from "@clerk/nextjs";
import { Button, Link } from "@mui/material";
import { readUserType } from "../api/db";

export default async function Dashboard() {
  const { userId } = auth();
  let userType = null
  if (userId) {
    userType = await readUserType(userId)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Your Dashboard</h1>

      <UserButton afterSignOutUrl="/" />
      {userType === "junior" && <div className="flex flex-row">
        <Link href="jobslist" underline="none">
          <Button variant="contained">go to all jobs</Button>
        </Link>
        <Link href="create/resume" underline="none">
          <Button variant="contained">My resume</Button>
        </Link>
      </div>}
      {userType === "recruiter" && <div className="flex flex-row">
        <Link href="jobslist" underline="none">
          <Button variant="contained">go to all jobs</Button>
        </Link>
        <Link href="create/job" underline="none">
          <Button variant="contained">Upload job</Button>
        </Link>
      </div>}
    </main>
  );
}


