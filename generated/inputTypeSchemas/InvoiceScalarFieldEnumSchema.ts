import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id','invoceNumber','status','issueDate','dueDate','subTotal','tax','total','clientId','createdAt','updatedAt']);

export default InvoiceScalarFieldEnumSchema;
