import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().optional(),
});
