'use server'

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const toggleFavorite = async (productId: string) => {
  const session = await auth()
  if (!session) throw new Error("You must be signed in to like a product")

  const userId = session.user?.id

  if (!userId) throw new Error("Missing user id")

  const existing = await prisma.favorite.findUnique({
    // userId_productId is the name of a composite unique constraint that Prisma automatically generates when you define
    // @@unique([userId, productId]) in product table.
    where: { userId_productId: { userId, productId } },
  })
  console.log("existing from toggleFavoriteAction", existing)


  if (existing) {
    await prisma.favorite.delete({
      where: { userId_productId: { userId, productId } },
    })
    revalidatePath(`/products/${productId}`)
    return { favorited: false }
  } else {
    await prisma.favorite.create({
      data: { userId, productId },
    })
    revalidatePath(`/products/${productId}`)
    return { favorited: true }
  }
}