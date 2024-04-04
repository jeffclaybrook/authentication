"use client"

import { useState, useEffect, ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { GlobalProvider } from "@/context/globalProvider"

interface ContextProviderProps {
 children: ReactNode
}

const ContextProvider = ({
 children
}: ContextProviderProps) => {
 const [isReady, setIsReady] = useState(false)

 useEffect(() => {
  setTimeout(() => {
   setIsReady(true)
  }, 250)
 }, [])

 if (!isReady) {
  return (
   <div className="w-full h-full flex items-center justify-center">
    <span className="loader"></span>
   </div>
  )
 }

 return (
  <GlobalProvider>
   <Toaster />
   {children}
  </GlobalProvider>
 )
}

export default ContextProvider