'use client'
import Habits from "./_components/Habits";
import { checkAccess } from "@/helper/checkAccess"
import { useEffect, useState } from "react"

const page = () => {
  let [user,setUser] = useState<string>('')
  async function getUser() {
    const x = await checkAccess()
    setUser(x.user)
  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="bg-this-grey h-screen">
        <h2>Hi, {user}</h2>
         <Habits />
    </div>
  )
}

export default page
