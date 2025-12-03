import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id','invoceNumber','status','issueDate','dueDate','subTotal','taxRate','total','clientId','createdAt','updatedAt','employeeId']);

export default InvoiceScalarFieldEnumSchema;
