import { z } from 'zod';

export const TaskStatusSchema = z.enum(['todo','in_progress','in_review','done']);

export type TaskStatusType = `${z.infer<typeof TaskStatusSchema>}`

export default TaskStatusSchema;
