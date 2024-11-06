"use server";

import { createUserDB, findUserByClerkIdDB } from '@/server/database/userQueries';

export async function isUserSaved(clerkId: string, clerkUser: { name: string }) {
    try {
        // ? Using clerk id as user id also
        const userAvailable = await findUserByClerkIdDB(clerkId);
        if (!userAvailable) {
            const userCreated = await createUserDB({
                name: clerkUser?.name,
                id : clerkId
            });
            console.log(`User \n${userCreated.name}\n created in db.`)
        }
    } catch (error) {
        console.error(`[isUserSaved] : ${error}`);
    }
}

export async function updateUser() {
    try {
        // actions here
    } catch (error) {
        console.error(`[updateUser] : ${error}`);
    }
}
export async function deleteUser() {
    try {
        // actions here
    } catch (error) {
        console.error(`[deleteUser] : ${error}`);
    }
}