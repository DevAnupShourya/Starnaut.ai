"use server"
import { User } from '@prisma/client'
import { createUserDB, findUserByClerkIdDB } from '@/server/database/userQueries';

export async function isUserInDB(clerkId: string, clerkUser: { name: string }) {
    const isUserSaved = await findUserByClerkIdDB(clerkId);
    if (!isUserSaved) {
        const userCreated = await createUserDB({
            name: clerkUser?.name,
            clerkId
        });
        console.log(`User \n${userCreated.name}\n created in db.`)
    }
}

export async function createUser(userData: Omit<User, 'id'>) {


}
export async function updateUser() {
    // actions here
}
export async function deleteUser() {
    // actions here
}