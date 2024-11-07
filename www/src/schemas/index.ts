import { z } from "zod";

// ? Helper function to check if it's client-side so that we do not get error while running on server
const isClientSide = typeof window !== "undefined";

export const filterByCategories = [
    { value: "All", label: "All" },
    { value: "Actor", label: "Actor" },
    { value: "Entrepreneur", label: "Entrepreneur" },
    { value: "Philosopher", label: "Philosopher" },
    { value: "Sports Person", label: "Sports Person" },
    { value: "Politician", label: "Politician" },
    { value: "Army Person", label: "Army Person" },
    { value: "Artist", label: "Artist" },
    { value: "Scientist", label: "Scientist" },
    { value: "Musician", label: "Musician" },
    { value: "Writer", label: "Writer" },
    { value: "Educator", label: "Educator" },
    { value: "Activist", label: "Activist" },
    { value: "Journalist", label: "Journalist" },
    { value: "Chef", label: "Chef" },
    { value: "Engineer", label: "Engineer" },
    { value: "Designer", label: "Designer" },
    { value: "Business Executive", label: "Business Executive" },
    { value: "Historian", label: "Historian" },
    { value: "Social Worker", label: "Social Worker" },
    { value: "Psychologist", label: "Psychologist" },
    { value: "Nurse", label: "Nurse" },
    { value: "Doctor", label: "Doctor" },
    { value: "Researcher", label: "Researcher" },
    { value: "Technologist", label: "Technologist" },
    { value: "Philanthropist", label: "Philanthropist" },
    { value: "Influencer", label: "Influencer" },
    { value: "Normal Human", label: "Normal Human" },
    { value: "Other", label: "Other" }
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