import { z } from 'zod';

export const PrioritySchema = z.enum(['low','medium','hogh','urgent']);

export type PriorityType = `${z.infer<typeof PrioritySchema>}`

export default PrioritySchema;
