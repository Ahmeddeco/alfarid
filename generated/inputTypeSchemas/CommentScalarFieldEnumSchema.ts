import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','content','createdAt','updatedAt','taskId','userId']);

export default CommentScalarFieldEnumSchema;
