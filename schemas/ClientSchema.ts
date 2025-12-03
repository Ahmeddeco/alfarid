import ClientStatusSchema from '@/generated/inputTypeSchemas/ClientStatusSchema'
import { z } from 'zod'



export const ClientSchema = z.object({
  status: ClientStatusSchema,
  id: z.string().nullish(),
  fullName: z.string(),
  email: z.string(),
  companyName: z.string().nullish(),
  companyLogo: z.string().nullish(),
  website: z.string().nullish(),
  industry: z.string().nullish(),
  phone: z.string(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
})

export type Client = z.infer<typeof ClientSchema>

export default ClientSchema
