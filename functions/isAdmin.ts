import { auth } from "@/auth"
import RoleSchema from "@/generated/inputTypeSchemas/RoleSchema"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export const isAdmin = async () => {
  const session = await auth()
  const authEmail = session?.user?.email
  if (!session) {
    redirect("/")
  } else {
    const authRole = await prisma.user.findUnique({ where: { email: authEmail! }, select: { role: true } })
    if (authRole?.role === RoleSchema.enum.admin || authEmail === process.env.SUPPER_ADMIN) {
      return { authRole, session }
    } else {
      redirect("/")
    }
  }
}
