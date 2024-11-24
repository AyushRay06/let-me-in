"use client"

import Link from "next/link"
import { Button } from "../button"

interface backButtonProps {
  label: string
  href: string
}

export const BackButton = ({ label, href }: backButtonProps) => {
  return <Button variant="link" className="font-normal w-full " size="sm" >
    <Link href={href}>{label}</Link>
  </Button>
}
