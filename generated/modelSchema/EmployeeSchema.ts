import { z } from 'zod';
import { EmployeeRoleSchema } from '../inputTypeSchemas/EmployeeRoleSchema'

/////////////////////////////////////////
// EMPLOYEE SCHEMA
/////////////////////////////////////////

export const EmployeeSchema = z.object({
  role: EmployeeRoleSchema,
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Employee = z.infer<typeof EmployeeSchema>

export default EmployeeSchema;
