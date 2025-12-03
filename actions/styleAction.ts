'use server'

import prisma from "@/lib/prisma"
import StyleSchema from "@/schemas/StyleSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

/* ---------------------------- addFactoryAction ---------------------------- */
export const addStyleAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: StyleSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.style.upsert({
      where: {
        title: submission.value.title
      },
      update: {
        description: submission.value.description
      },
      create: {
        title: submission.value.title,
        description: submission.value.description
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/styles")
}

/* ---------------------------- editFactoryAction --------------------------- */
export const editStyleAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: StyleSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.style.update({
      where: {
        id: submission.value.id!
      },
      data: {
        title: submission.value.title,
        description: submission.value.description
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/styles")
}

/* ------------------------------ deleteStyle ----------------------------- */
export const deleteStyleAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.style.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/styles")
}