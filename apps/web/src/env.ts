import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.url(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DISCORD_BOT_TOKEN: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  NEXT_PUBLIC_URL: z.url(),
});

export const env = envSchema.parse(process.env);
