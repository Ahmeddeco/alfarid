import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id','title','description','status','priority','dueDate','projectId','userId','createdAt','updatedAt']);

export default TaskScalarFieldEnumSchema;
