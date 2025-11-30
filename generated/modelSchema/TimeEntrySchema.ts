import { z } from 'zod';

/////////////////////////////////////////
// TIME ENTRY SCHEMA
/////////////////////////////////////////

export const TimeEntrySchema = z.object({
  id: z.string(),
  description: z.string().nullish(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  duration: z.number().nullish(),
  isBillable: z.boolean(),
  projectId: z.string().nullish(),
  taskId: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TimeEntry = z.infer<typeof TimeEntrySchema>

export default TimeEntrySchema;
