import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import db from "@/utils/db"

export async function DELETE(
 req: Request,
 { params }: {
  params: {
   id: string
  }
 }
) {
 try {
  const { userId } = auth()
  const { id } = params
  if (!userId) {
   return new NextResponse("Unauthorized", { status: 401 })
  }
  const task = await db.task.delete({
   where: {
    id
   }
  })
  return NextResponse.json(task)
 } catch (error) {
  return NextResponse.json({ error: "Error deleting task", status: 500 })
 }
}