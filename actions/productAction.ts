'use server'

import prisma from "@/lib/prisma"
import ProductSchema from "@/schemas/ProductSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

/* ---------------------------- addProductAction ---------------------------- */
export const addProductAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ProductSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.product.create({
      data: {
        title: submission.value.title,
        description: submission.value.description,
        category: submission.value.category,
        price: submission.value.price,
        discount: submission.value.discount,
        quantity: submission.value.quantity,
        styleId: submission.value.styleId,
        factoryId: submission.value.factoryId,
        userId: submission.value.userId,
        mainImage: submission.value.mainImage,
        images: submission.value.images
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/products")
}

/* ---------------------------- editProductAction --------------------------- */
export const editProductAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ProductSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.product.update({
      where: {
        id: submission.value.id!
      },
      data: {
        title: submission.value.title,
        description: submission.value.description,
        category: submission.value.category,
        price: submission.value.price,
        discount: submission.value.discount,
        quantity: submission.value.quantity,
        styleId: submission.value.styleId,
        factoryId: submission.value.factoryId,
        userId: submission.value.userId,
        mainImage: submission.value.mainImage,
        images: submission.value.images
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/products")
}

/* --------------------------- deleteProductAction -------------------------- */
export const deleteProductAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.product.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/products")
}