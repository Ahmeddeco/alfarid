import { z } from 'zod';

export const InvoceItemScalarFieldEnumSchema = z.enum(['id','description','quantity','unitPrice','total','invoiceId','createdAt','updatedAt']);

export default InvoceItemScalarFieldEnumSchema;
