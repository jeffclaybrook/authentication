"use client"

import { SignIn } from "@clerk/nextjs"

const Page = () => (
 <div className="flex items-center justify-center h-full">
  <SignIn />
 </div>
)

export default Page