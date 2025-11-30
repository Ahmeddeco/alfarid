import { z } from 'zod';

export const InvoiceStatusSchema = z.enum(['draft','sent','paid','overdue','void']);

export type InvoiceStatusType = `${z.infer<typeof InvoiceStatusSchema>}`

export default InvoiceStatusSchema;
