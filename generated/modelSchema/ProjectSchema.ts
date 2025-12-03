import { z } from 'zod';
import { ProjectStatusSchema } from '../inputTypeSchemas/ProjectStatusSchema'

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  status: ProjectStatusSchema,
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  startDate: z.date().nullish(),
  endDate: z.date().nullish(),
  budget: z.number().nullish(),
  clientId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  employeeId: z.string().nullish(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
