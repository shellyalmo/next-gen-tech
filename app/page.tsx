import { UserButton, auth } from "@clerk/nextjs";
import { Button, Link } from "@mui/material";
import { redirect } from "next/navigation";


export default async function Home() {
  const { userId } = auth();
  if (userId !== null) {
    redirect('/dashboard')
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

    </main>
  );
}


