import { z } from "zod";

// ? Helper function to check if it's client-side so that we do not get error while running on server
const isClient = typeof window !== "undefined";

export const personaFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: 'Name is too short!' })
        .max(50, { message: 'Name is too long!' }),
    description: z.string().trim().max(55),
    exampleConversation: z.string().trim(),
    instructions: z.string().trim(),
    // *  Use FileList only on client
    image: isClient
        ? z.instanceof(FileList).refine(files => files.length > 0, {
            message: "Image is required."
        })
        : z.string().min(1, { message: "Image is required." }),
    category: z.enum([
        'Actor',
        'Entrepreneur',
        'Philosopher',
        'Sports Person',
        'Politician',
        'Army Person',
        'Artist',
        'Scientist',
        'Musician',
        'Writer',
        'Educator',
        'Activist',
        'Journalist',
        'Chef',
        'Engineer',
        'Designer',
        'Business Executive',
        'Historian',
        'Social Worker',
        'Psychologist',
        'Nurse',
        'Doctor',
        'Researcher',
        'Technologist',
        'Philanthropist',
        'Influencer',
        'Normal Human',
    ]),
});

// personaInputSchema is similar, with image field changed to a string for the server
export const personaInputSchema = personaFormSchema.extend({
    creatorId: z.string(),
    image: z.string(),  // Image will be passed as a string (base64 or URL) in input schema
});
