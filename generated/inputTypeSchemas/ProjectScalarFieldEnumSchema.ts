import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','name','description','status','startDate','endDate','budget','clientId','createdAt','updatedAt']);

export default ProjectScalarFieldEnumSchema;
