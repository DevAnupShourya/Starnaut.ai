import prisma from '@/server/database/prisma';
import { Prisma } from '@prisma/client';

export async function createPersonaDB(personaData:
    Omit<Prisma.PersonaCreateInput, 'User' | 'id' | 'likes' | 'users' | 'createdAt' | 'updatedAt' | 'Chat' | 'Message'> & { creatorId: string }
) {
    return await prisma.persona.create({ data: { ...personaData } })
}

export async function getAllPersonasWithParamsDB({ name, category, }: { name?: string; category?: string; }) {
    // ? Base where condition object
    const where: any = {
        AND: [],
    };

    // ? Add name filter if provided
    if (name) {
        where.AND.push({
            name: {
                contains: name,
                mode: 'insensitive',
            },
        });
    }

    // ? Add category filter if it's not 'all'
    if (category && category !== 'all') {
        where.AND.push({
            category: {
                equals: category,
                mode: 'insensitive',
            },
        });
    };

    // ? Perform the query with dynamic where condition
    return await prisma.persona.findMany({ where });
}

export async function getPersonaByIdDB(personaId: string) {
    return await prisma.persona.findFirst({
        where: {
            id: personaId
        }
    })
}