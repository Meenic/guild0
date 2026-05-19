import { z } from "zod";

export const UpdateGuildSettingsSchema = z.object({
  guildId: z.string().min(1),
  prefix: z.string().min(1).max(5),
  logChannelId: z.string().nullable().optional(),
  welcomeChannelId: z.string().nullable().optional(),
  welcomeMessage: z.string().max(2000).nullable().optional(),
  autoRoleId: z.string().nullable().optional(),
  moderationEnabled: z.boolean().default(false),
});

export const UpdateMemberRoleSchema = z.object({
  guildId: z.string().min(1),
  targetUserId: z.string().min(1),
  newRole: z.enum(["VIEWER", "MODERATOR", "ADMIN"]),
});

export type UpdateGuildSettingsInput = z.infer<
  typeof UpdateGuildSettingsSchema
>;
export type UpdateMemberRoleInput = z.infer<typeof UpdateMemberRoleSchema>;
