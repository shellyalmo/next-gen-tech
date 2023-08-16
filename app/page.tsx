import { UserButton, auth } from "@clerk/nextjs";
import { Button, Link } from "@mui/material";
import { readUserType } from "./api/db";

export default async function Home() {
  const { userId } = auth();
  // better to do a new component with userType
  let userType = null
  if (userId) {
    userType = await readUserType(userId)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to jobs board for juniors</h1>
      {userId === null && (
        <div className="flex flex-row">
          <Link href="sign-in" underline="none">
            <Button variant="contained">Signin</Button>
          </Link>
          <Link href="sign-up" underline="none">
            <Button variant="contained">Signup</Button>
          </Link>
        </div>
      )}

      <UserButton afterSignOutUrl="/" />
      {userType === "junior" && <div className="flex flex-row">
        <Link href="jobslist" underline="none">
          <Button variant="contained">go to all jobs</Button>
        </Link>
        <Link href="junior" underline="none">
          <Button variant="contained">Upload resume</Button>
        </Link>
      </div>}
      {userType === "recruiter" && <div className="flex flex-row">
        <Link href="jobslist" underline="none">
          <Button variant="contained">go to all jobs</Button>
        </Link>
        <Link href="register/recruiter" underline="none">
          <Button variant="contained">Upload job</Button>
        </Link>
      </div>}
    </main>
  );
}


