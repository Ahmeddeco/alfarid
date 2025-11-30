import { z } from 'zod';

export const RoleSchema = z.enum(['admin','manager','staff','client']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
