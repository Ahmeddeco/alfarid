import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  clientId: z.string().nullish(),
  employeeId: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
