import { z } from "zod";

export const formSchema = z.object({
  nickname: z.string(),
  name: z.string(),
  birthdate: z.string(),
  stack: z.union([z.array(z.string()), z.string()]),
});
