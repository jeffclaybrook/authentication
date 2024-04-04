"use client"

import { useGlobalState } from "@/context/globalProvider"
import Tasks from "@/components/Tasks"

const Page = () => {
 const { completedTasks } = useGlobalState()

 return (
  <Tasks
   title="Completed Tasks"
   tasks={completedTasks}
  />
 )
}

export default Page