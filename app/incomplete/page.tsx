"use client"

import { useGlobalState } from "@/context/globalProvider"
import Tasks from "@/components/Tasks"

const Page = () => {
 const { incompleteTasks } = useGlobalState()

 return (
  <Tasks
   title="Incomplete Tasks"
   tasks={incompleteTasks}
  />
 )
}

export default Page