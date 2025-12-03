import { z } from 'zod';
import { ClientStatusSchema } from '../inputTypeSchemas/ClientStatusSchema'

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const ClientSchema = z.object({
  status: ClientStatusSchema,
  id: z.string(),
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
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Client = z.infer<typeof ClientSchema>

export default ClientSchema;
