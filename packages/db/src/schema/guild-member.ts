import { relations } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { user } from "./auth";
import { guild } from "./guild";

export const dashboardRoleEnum = pgEnum("dashboard_role", [
  "OWNER",
  "ADMIN",
  "MODERATOR",
  "VIEWER",
]);

export const guildMember = pgTable(
  "guild_member",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    guildId: text("guild_id")
      .notNull()
      .references(() => guild.id, { onDelete: "cascade" }),
    role: dashboardRoleEnum("role").notNull().default("VIEWER"),
    joinedAt: timestamp("joined_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true }),
  },
  (table) => [primaryKey({ columns: [table.userId, table.guildId] })],
);

export const guildMemberRelations = relations(guildMember, ({ one }) => ({
  guild: one(guild, {
    fields: [guildMember.guildId],
    references: [guild.id],
  }),
  user: one(user, {
    fields: [guildMember.userId],
    references: [user.id],
  }),
}));

export type GuildMember = typeof guildMember.$inferSelect;
