import { z } from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum(['id','fullName','email','role','phone','country','state','city','createdAt','updatedAt']);

export default EmployeeScalarFieldEnumSchema;
