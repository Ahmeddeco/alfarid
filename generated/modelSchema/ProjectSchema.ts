import { z } from 'zod';
import { Decimal as PrismaDecimal } from '@prisma/client/runtime/library';
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
  budget: z.instanceof(PrismaDecimal, { message: "Field 'budget' must be a Decimal. Location: ['Models', 'Project']"}).nullish(),
  clientId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
