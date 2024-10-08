import { z } from "zod";

export const personaSchema = z.object({
    image: z.string().trim().toLowerCase(),
    name: z.string().trim().min(3, { message: 'Name is too short!' }).max(50, { message: 'Name is too long!' }),
    description: z.string().trim().min(10).max(55),
    category: z.enum(['cat1', 'cat2', 'cat3']),
    instructions: z.string().trim().min(55).max(255),
    example_conversation: z.string().trim().min(55).max(255),
});