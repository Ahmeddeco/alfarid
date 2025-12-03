import { z } from 'zod';
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
  subTotal: z.number(),
  taxRate: z.number(),
  total: z.number(),
  clientId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  employeeId: z.string(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

export default InvoiceSchema;
