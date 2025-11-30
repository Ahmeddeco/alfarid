import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id','name','companyName','website','industry','email','phone','country','state','city','status','createdAt','updatedAt']);

export default ClientScalarFieldEnumSchema;
