import { z } from 'zod';

export const TimeEntryScalarFieldEnumSchema = z.enum(['id','description','startDate','endDate','duration','isBillable','projectId','taskId','userId','createdAt','updatedAt']);

export default TimeEntryScalarFieldEnumSchema;
