import { relations } from "drizzle-orm";
import { bigint, boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { guildMember } from "./guild-member";
import { guildSetting } from "./guild-setting";

export const guild = pgTable("guild", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon"),
  ownerId: text("owner_id").notNull(),
  botJoinedAt: timestamp("bot_joined_at", { withTimezone: true }),
  memberCount: bigint("member_count", { mode: "number" }).default(0),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const guildRelations = relations(guild, ({ one, many }) => ({
  members: many(guildMember),
  setting: one(guildSetting, {
    fields: [guild.id],
    references: [guildSetting.guildId],
  }),
}));

export type Guild = typeof guild.$inferSelect;
export type NewGuild = typeof guild.$inferInsert;
