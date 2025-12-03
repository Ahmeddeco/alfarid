'use server'

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const toggleLike = async (productId: string) => {
  const session = await auth()
  if (!session) throw new Error("You must be signed in to like a product")

  const userId = session.user?.id

  if (!userId) throw new Error("Missing user id")

  const existing = await prisma.like.findUnique({
    // userId_productId is the name of a composite unique constraint that Prisma automatically generates when you define
    // @@unique([userId, productId])
    where: { userId_productId: { userId, productId } },
  })

  if (existing) {
    await prisma.like.delete({
      where: { userId_productId: { userId, productId } },
    })
    revalidatePath(`/products/${productId}`)
    return { liked: false }
  } else {
    await prisma.like.create({
      data: { userId, productId },
    })
    revalidatePath(`/products/${productId}`)
    return { liked: true }
  }
}