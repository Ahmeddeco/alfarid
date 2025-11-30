import { z } from 'zod';
import { TaskStatusSchema } from '../inputTypeSchemas/TaskStatusSchema'
import { PrioritySchema } from '../inputTypeSchemas/PrioritySchema'

/////////////////////////////////////////
// TASK SCHEMA
/////////////////////////////////////////

export const TaskSchema = z.object({
  status: TaskStatusSchema,
  priority: PrioritySchema,
  id: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  dueDate: z.date().nullish(),
  projectId: z.string().nullish(),
  userId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Task = z.infer<typeof TaskSchema>

export default TaskSchema;
