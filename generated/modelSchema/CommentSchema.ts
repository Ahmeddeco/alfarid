import { z } from 'zod';

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  taskId: z.string().nullish(),
  userId: z.string(),
})

export type Comment = z.infer<typeof CommentSchema>

export default CommentSchema;
