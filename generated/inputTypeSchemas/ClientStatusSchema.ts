import { z } from 'zod';

export const ClientStatusSchema = z.enum(['active','inactive','lead']);

export type ClientStatusType = `${z.infer<typeof ClientStatusSchema>}`

export default ClientStatusSchema;
