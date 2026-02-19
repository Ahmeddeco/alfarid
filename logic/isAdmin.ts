import { auth } from "@/auth"
import EmployeeRoleSchema from "@/generated/inputTypeSchemas/EmployeeRoleSchema"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export const isAdmin = async () => {
  const session = await auth()
  const authEmail = session?.user?.email
  if (!session) {
    redirect("/")
  } else {
    const authRole = await prisma.employee.findUnique({ where: { email: authEmail! }, select: { role: true } })
    if (authRole?.role === EmployeeRoleSchema.enum.admin || authEmail === process.env.SUPPER_ADMIN) {
      return { authRole, session }
    } else {
      redirect("/")
    }
  }
}
