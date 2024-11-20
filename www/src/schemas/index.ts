import { z } from "zod";

// ? Helper function to check if it's client-side so that we do not get error while running on server
const isClientSide = typeof window !== "undefined";

export const filterByCategories = [
    { value: "all", label: "All" },
    { value: "actor", label: "Actor" },
    { value: "entrepreneur", label: "Entrepreneur" },
    { value: "philosopher", label: "Philosopher" },
    { value: "sports person", label: "Sports Person" },
    { value: "politician", label: "Politician" },
    { value: "army person", label: "Army Person" },
    { value: "artist", label: "Artist" },
    { value: "scientist", label: "Scientist" },
    { value: "musician", label: "Musician" },
    { value: "writer", label: "Writer" },
    { value: "educator", label: "Educator" },
    { value: "activist", label: "Activist" },
    { value: "journalist", label: "Journalist" },
    { value: "chef", label: "Chef" },
    { value: "engineer", label: "Engineer" },
    { value: "designer", label: "Designer" },
    { value: "business executive", label: "Business Executive" },
    { value: "historian", label: "Historian" },
    { value: "social worker", label: "Social Worker" },
    { value: "psychologist", label: "Psychologist" },
    { value: "nurse", label: "Nurse" },
    { value: "doctor", label: "Doctor" },
    { value: "researcher", label: "Researcher" },
    { value: "technologist", label: "Technologist" },
    { value: "philanthropist", label: "Philanthropist" },
    { value: "influencer", label: "Influencer" },
    { value: "normal human", label: "Normal Human" },
    { value: "other", label: "Other" }
];

const Categories = [
    'Actor', 'Entrepreneur', 'Philosopher', 'Sports Person', 'Politician', 'Army Person',
    'Artist', 'Scientist', 'Musician', 'Writer', 'Educator', 'Activist', 'Journalist',
    'Chef', 'Engineer', 'Designer', 'Business Executive', 'Historian', 'Social Worker',
    'Psychologist', 'Nurse', 'Doctor', 'Researcher', 'Technologist', 'Philanthropist',
    'Influencer', 'Normal Human', 'Other'
] as const;

export const personaFormSchema = z.object({
    name: z.string().trim().min(3).max(49),
    description: z.string().trim().min(9).max(99),
    exampleConversation: z.string().trim().min(9).max(799),
    instructions: z.string().trim().min(9).max(599),
    category: z.enum(Categories),
    // *  Use FileList only on client
    image: isClientSide
        ? z.instanceof(FileList).refine(files => files.length > 0, {
            message: "Image is required."
        })
        : z.string().min(1, { message: "Image is required." }),
});

export const personaInputSchema = personaFormSchema.extend({
    creatorId: z.string().trim(),
    // * Image will be passed as a string (base64 or URL) in input schema
    image: z.string(),
});

export type Persona = {
    id: string,
    name: string,
    description: string,
    exampleConversation: string,
    instructions: string,
    image: string,
    category: string,
    likes: number | null,
    users: number | null,
    createdAt: Date,
    updatedAt: Date,
}