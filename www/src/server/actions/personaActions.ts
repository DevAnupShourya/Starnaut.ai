"use server";

import { z } from "zod";
import { personaInputSchema } from "@/schemas/index";

import { createPersonaDB } from "@/server/database/personaQueries";

export async function createPersona(data: z.infer<typeof personaInputSchema>) {
    return await createPersonaDB({ ...data });
}

export async function updatePersona() {
    // actions here
}
export async function deletePersona() {
    // actions here
}