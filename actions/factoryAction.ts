'use server'

import prisma from "@/lib/prisma"
import FactorySchema from "@/schemas/FactorySchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

/* ---------------------------- addFactoryAction ---------------------------- */
export const addFactoryAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: FactorySchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.factory.upsert({
      where: {
        email: submission.value.email,
      },
      update: {
        name: submission.value.name,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        logo: submission.value.logo,
      },
      create: {
        name: submission.value.name,
        email: submission.value.email,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        logo: submission.value.logo,
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/factories")
}

/* ---------------------------- editFactoryAction --------------------------- */
export const editFactoryAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: FactorySchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.factory.update({
      where: {
        id: submission.value.id!
      },
      data: {
        name: submission.value.name,
        email: submission.value.email,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        logo: submission.value.logo,
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/factories")
}

/* ------------------------------ deleteFactory ----------------------------- */
export const deleteFactoryAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.factory.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/factories")
}