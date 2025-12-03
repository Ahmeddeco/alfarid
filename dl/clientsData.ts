import prisma from "@/lib/prisma"

export const getAllClientsToClientsPage = async (size: number, page: number) => {
  try {
    const totalUsers = await prisma.client.count()
    const totalPages = Math.ceil(totalUsers / size)
    const data = await prisma.client.findMany({
      select: { country: true, email: true, state: true, id: true, companyLogo: true, companyName: true, fullName: true, phone: true },
      skip: (page * size) - size,
      take: size,
      orderBy: {
        createdAt: "desc",
      },
    })
    return { data, totalPages }
  } catch (error) {
    console.error(error)
  }
}

export const getOneClient = async (id: string) => {
  try {
    const data = await prisma.client.findUnique({
      where: {
        id: id,
      },
    })
    return { data }
  } catch (error) {
    console.error(error)
  }

}