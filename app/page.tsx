import Image from 'next/image'
import Link from 'next/link'
import { SignIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to jobs boards for juniors</h1>
      <SignIn redirectUrl="register"/>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
