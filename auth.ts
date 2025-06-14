import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import * as schema from "@/db/schema"; // your schema 

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    emailAndPassword: {
        enabled: true,   // Enable email and password authentication
        requireEmailVerification: false, // Set to true if you want to require email verification
    }
});