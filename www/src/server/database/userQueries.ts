import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function findUserByClerkIdDB(cId: string): Promise<boolean> {
    const user = await db.user.findFirst({
        where: {
            clerkId: cId
        }
    });
    
    // ? Return `true` if user exists, otherwise `false`
    return user !== null;
}

export async function createUserDB(userData: { name: string; clerkId: string }) {
    return db.user.create({
        data: userData,
    });
}