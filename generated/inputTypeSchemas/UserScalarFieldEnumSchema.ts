import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','mobile','country','state','city','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
