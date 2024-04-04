"use client"

import { useGlobalState } from "@/context/globalProvider"
import Tasks from "@/components/Tasks"

const Page = () => {
 const { importantTasks } = useGlobalState()

 return (
  <Tasks
   title="Important Tasks"
   tasks={importantTasks}
  />
 )
}

export default Page