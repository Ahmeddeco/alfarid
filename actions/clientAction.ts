'use server'

import prisma from "@/lib/prisma"
import ClientSchema from "@/schemas/ClientSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
/* ------------------------------ addUserAction ----------------------------- */
export const addClientAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ClientSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.client.upsert({
      where: {
        email: submission.value.email!,
      },
      update: {
        fullName: submission.value.fullName,
        companyName: submission.value.companyName,
        companyLogo: submission.value.companyLogo,
        website: submission.value.website,
        industry: submission.value.industry,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        status: submission.value.status,
      },
      create: {
        fullName: submission.value.fullName,
        email: submission.value.email!,
        companyName: submission.value.companyName,
        companyLogo: submission.value.companyLogo,
        website: submission.value.website,
        industry: submission.value.industry,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        status: submission.value.status,
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/clients")
}


/* ----------------------------- editUserAction ----------------------------- */
export const editClientAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ClientSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.client.update({
      where: {
        id: submission.value.id!
      },
      data: {
        fullName: submission.value.fullName,
        email: submission.value.email!,
        companyName: submission.value.companyName,
        companyLogo: submission.value.companyLogo,
        website: submission.value.website,
        industry: submission.value.industry,
        phone: submission.value.phone,
        country: submission.value.country,
        state: submission.value.state,
        city: submission.value.city,
        status: submission.value.status,
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/clients")
}

/* ------------------------------- deleteUser ------------------------------- */
export const deleteClientAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.client.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/clients")
}