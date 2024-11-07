import prisma from '@/server/database/prisma';
import { Prisma } from '@prisma/client';

export async function createPersonaDB(personaData:
    Omit<Prisma.PersonaCreateInput, 'User' | 'id' | 'likes' | 'users' | 'createdAt' | 'updatedAt' | 'Chat' | 'Message'> & { creatorId: string }
) {
    return await prisma.persona.create({data: { ...personaData }})
}

export async function getAllPersonasDB() {
    return await prisma.persona.findMany();
}
