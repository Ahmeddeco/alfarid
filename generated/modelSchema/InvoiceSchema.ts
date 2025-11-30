import { z } from 'zod';
import { Decimal as PrismaDecimal } from '@prisma/client/runtime/library';
import { InvoiceStatusSchema } from '../inputTypeSchemas/InvoiceStatusSchema'

/////////////////////////////////////////
// INVOICE SCHEMA
/////////////////////////////////////////

export const InvoiceSchema = z.object({
  status: InvoiceStatusSchema,
  id: z.string(),
  invoceNumber: z.string(),
  issueDate: z.date(),
  dueDate: z.date(),
  subTotal: z.instanceof(PrismaDecimal, { message: "Field 'subTotal' must be a Decimal. Location: ['Models', 'Invoice']"}),
  tax: z.instanceof(PrismaDecimal, { message: "Field 'tax' must be a Decimal. Location: ['Models', 'Invoice']"}),
  total: z.instanceof(PrismaDecimal, { message: "Field 'total' must be a Decimal. Location: ['Models', 'Invoice']"}),
  clientId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

export default InvoiceSchema;
