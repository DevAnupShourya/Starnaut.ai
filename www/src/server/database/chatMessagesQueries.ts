import prisma from '@/server/database/prisma';

export async function getAllChatsByUserIdDB(uId: string) {
    return await prisma.chat.findMany({
        where: {
            userId: uId
        }
    });
}