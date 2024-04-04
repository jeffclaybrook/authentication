"use client"

import { useGlobalState } from "@/context/globalProvider"
import Tasks from "@/components/Tasks"

const Home = () => {
 const { tasks } = useGlobalState()

 return (
  <Tasks
   title="All Tasks"
   tasks={tasks}
  />
 )
}

export default Home