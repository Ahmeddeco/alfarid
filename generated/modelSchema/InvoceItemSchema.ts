import { z } from 'zod';

/////////////////////////////////////////
// INVOCE ITEM SCHEMA
/////////////////////////////////////////

export const InvoceItemSchema = z.object({
  id: z.string(),
  description: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  total: z.number(),
  invoiceId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type InvoceItem = z.infer<typeof InvoceItemSchema>

export default InvoceItemSchema;
