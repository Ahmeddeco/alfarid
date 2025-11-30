import { z } from 'zod';

export const ProjectStatusSchema = z.enum(['planning','active','on_hold','completed','canceled']);

export type ProjectStatusType = `${z.infer<typeof ProjectStatusSchema>}`

export default ProjectStatusSchema;
