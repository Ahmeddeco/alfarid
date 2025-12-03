'use server'

import prisma from "@/lib/prisma"
import ColorSchema from "@/schemas/ColorSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

/* ----------------------------- addColorAction ----------------------------- */
export const addColorAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ColorSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.color.create({
      data: {
        title: submission.value.title,
        colorCode: submission.value.colorCode
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/colors")
}

/* ----------------------------- editColorAction ---------------------------- */
export const editColorAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ColorSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.color.update({
      where: {
        id: submission.value.id!
      },
      data: {
        title: submission.value.title,
        colorCode: submission.value.colorCode
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/colors")
}

/* ---------------------------- deleteColorAction --------------------------- */
export const deleteColorAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.color.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/colors")
}