import { z } from 'zod';
import { Decimal as PrismaDecimal } from '@prisma/client/runtime/library';

/////////////////////////////////////////
// INVOCE ITEM SCHEMA
/////////////////////////////////////////

export const InvoceItemSchema = z.object({
  id: z.string(),
  description: z.string(),
  quantity: z.number(),
  unitPrice: z.instanceof(PrismaDecimal, { message: "Field 'unitPrice' must be a Decimal. Location: ['Models', 'InvoceItem']"}),
  total: z.instanceof(PrismaDecimal, { message: "Field 'total' must be a Decimal. Location: ['Models', 'InvoceItem']"}),
  invoiceId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type InvoceItem = z.infer<typeof InvoceItemSchema>

export default InvoceItemSchema;
