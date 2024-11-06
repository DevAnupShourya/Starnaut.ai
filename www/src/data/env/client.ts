import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    emptyStringAsUndefined: true,
    client: {
        // ? env which will be used by me 
        // NEXT_PUBLIC_SERVER_URL: z.string().url(),
    },
    experimental__runtimeEnv: {
        // ? env which will be used by me 
        // NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    },
})