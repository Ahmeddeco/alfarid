import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LogIn } from 'lucide-react'

export default function SignIn() {
  return (
    <Button asChild size={"sm"}>
      <Link href={'/auth/sign-in'}><LogIn />SignIn</Link>
    </Button>
  )
}
