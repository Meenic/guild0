import { relations } from "drizzle-orm";
import { boolean, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { guild } from "./guild";

export const guildSetting = pgTable("guild_setting", {
  guildId: text("guild_id")
    .primaryKey()
    .references(() => guild.id, { onDelete: "cascade" }),
  prefix: text("prefix").default("!").notNull(),
  logChannelId: text("log_channel_id"),
  welcomeChannelId: text("welcome_channel_id"),
  welcomeMessage: text("welcome_message"),
  autoRoleId: text("auto_role_id"),
  moderationEnabled: boolean("moderation_enabled").default(false).notNull(),
  features: jsonb("features")
    .$type<Record<string, boolean>>()
    .default({})
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const guildSettingRelations = relations(guildSetting, ({ one }) => ({
  guild: one(guild, {
    fields: [guildSetting.guildId],
    references: [guild.id],
  }),
}));

export type GuildSetting = typeof guildSetting.$inferSelect;
