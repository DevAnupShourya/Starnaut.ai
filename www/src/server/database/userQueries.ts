import prisma from '@/server/database/prisma';

export async function findUserByClerkIdDB(cId: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
        where: {
            id: cId
        },
        select: {
            id: true,
        }
    });

    // ? Return `true` if user exists, otherwise `false`
    return user !== null;
}

export async function createUserDB(userData: { name: string; id: string }) {
    return prisma.user.create({
        data: userData,
    });
};
