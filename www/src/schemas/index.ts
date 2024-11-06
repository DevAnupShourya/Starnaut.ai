import { z } from "zod";

export const personaSchema = z.object({
    name: z.string().trim().min(3, { message: 'Name is too short!' }).max(50, { message: 'Name is too long!' }),
    description: z.string().trim().max(55),
    example_conversation: z.string().trim(),
    instructions: z.string().trim(),
    image: z.string().trim().toLowerCase(),
    category: z.enum(['Actor', 'Entrepreneur', 'Philosopher', 'Sports Person', 'Politician', 'Army Person', 'Artist', 'Scientist', 'Musician', 'Writer', 'Educator', 'Activist', 'Journalist', 'Chef', 'Engineer', 'Designer', 'Business Executive', 'Historian', 'Social Worker', 'Psychologist', 'Nurse', 'Doctor', 'Researcher', 'Technologist', 'Philanthropist', 'Influencer', 'Normal Human']),
});