'use client'
import { checkAccess } from "@/helper/checkAccess"
import { useEffect, useState } from "react"

const page = () => {
  let [user,setUser] = useState<string>('')
  async function getUser() {
    const x = await checkAccess()
    setUser(x.user)
    console.log(user)
  }
  useEffect(() => {
    console.log(getUser())
  }, [])

  return (
    <div>
        <h2>Hi, {user}</h2>

    </div>
  )
}

export default page