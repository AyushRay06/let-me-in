"use client"

import { FcGoogle } from "react-icons/fc"
import { Button } from "../button"
import { FaGithub } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  )
}

export default Socials
