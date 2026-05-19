import { db } from "@guild0/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export { toNextJsHandler } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      scope: ["identify", "email", "guilds"],
      mapProfileToUser: (profile) => ({
        discordId: profile.id,
        email: profile.email ?? `${profile.id}@discord.placeholder.local`,
        image: profile.image_url,
      }),
      overrideUserInfoOnSignIn: true,
    },
  },

  user: {
    additionalFields: {
      discordId: {
        type: "string",
        required: false,
        input: false,
        unique: true,
      },
    },
  },

  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          if (user.discordId) {
            console.log(
              `[auth] new user ${user.discordId} created, guild sync will run on first visit`,
            );
          }
        },
      },
    },
  },

  plugins: [nextCookies()],
});
