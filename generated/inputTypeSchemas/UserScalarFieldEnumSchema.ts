import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','mobile','country','state','city','role','createdAt','updatedAt','clientId']);

export default UserScalarFieldEnumSchema;
