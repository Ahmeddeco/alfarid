import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id','title','description','status','priority','dueDate','projectId','createdAt','updatedAt','userId']);

export default TaskScalarFieldEnumSchema;
