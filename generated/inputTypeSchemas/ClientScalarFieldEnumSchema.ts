import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id','fullName','email','companyName','companyLogo','website','industry','phone','country','state','city','status','createdAt','updatedAt']);

export default ClientScalarFieldEnumSchema;
