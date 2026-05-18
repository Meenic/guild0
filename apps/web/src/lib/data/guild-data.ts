import { db } from "@guild0/db";
import { guildMember } from "@guild0/db/schema";
import { eq } from "drizzle-orm";

export async function getUserGuildList(userId: string) {
  return db.query.guildMember.findMany({
    where: eq(guildMember.userId, userId),
    with: { guild: true },
  });
}
