import { z } from "zod";

export const MemorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string({
    error: (issue) => {
      try {
        new Date(issue.input as string);
      } catch {
        return "Date is required";
      }
    },
  }),
  story: z.string().min(1, "Story is required"),
  images: z.array(z.file()).min(1, "At least one image is required"),
});

export type Memory = z.infer<typeof MemorySchema>;
export type MemoryFlattenedError = z.ZodFlattenedError<Memory>;
