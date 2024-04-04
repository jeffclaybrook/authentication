import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import db from "@/utils/db"

export async function POST(req: Request) {
 try {
  const { userId } = auth()
  if (!userId) {
   return new NextResponse("Unauthorized", { status: 401 })
  }
  const {
   title,
   description,
   date,
   completed,
   important
  } = await req.json()
  if (!title || !description || !date) {
   return NextResponse.json({ error: "Missing fields required", status: 400 })
  }
  if (title.length < 3) {
   return NextResponse.json({ error: "Title must be at least 3 characters long", status: 400 })
  }
  const task = await db.task.create({
   data: {
    title,
    description,
    date,
    isCompleted: completed,
    isImportant: important,
    userId
   }
  })
  return NextResponse.json(task)
 } catch (error) {
  return NextResponse.json({ error: "Error creating task", status: 500 })
 }
}

export async function GET(req: Request) {
 try {
  const { userId } = auth()
  if (!userId) {
   return new NextResponse("Unauthorized", { status: 401 })
  }
  const tasks = await db.task.findMany({
   where: {
    userId
   }
  })
  return NextResponse.json(tasks)
 } catch (error) {
  return NextResponse.json({ error: "Error updating task", status: 500 })
 }
}

export async function PUT(req: Request) {
 try {
  const { userId } = auth()
  const { isCompleted, id } = await req.json()
  if (!userId) {
   return new NextResponse("Unauthorized", { status: 401 })
  }
  const task = await db.task.update({
   where: {
    id
   },
   data: {
    isCompleted
   }
  })
  return NextResponse.json(task)
 } catch (error) {
  return NextResponse.json({ error: "Error deleting task", status: 500 })
 }
}