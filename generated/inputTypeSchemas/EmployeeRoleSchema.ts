import { z } from 'zod';

export const EmployeeRoleSchema = z.enum(['admin','manager','staff']);

export type EmployeeRoleType = `${z.infer<typeof EmployeeRoleSchema>}`

export default EmployeeRoleSchema;
