import { z } from 'zod';

export const TaskStatusSchema = z.enum(['todo','in_progress','review','done']);

export type TaskStatusType = `${z.infer<typeof TaskStatusSchema>}`

export default TaskStatusSchema;
