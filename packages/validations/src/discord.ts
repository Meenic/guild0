import { z } from "zod";

// 17-20 digit numeric string
export const SnowflakeSchema = z
  .string()
  .regex(/^\d{17,20}$/, "Invalid Discord ID");

export const GuildIdSchema = SnowflakeSchema;
export const UserIdSchema = SnowflakeSchema;
export const RoleIdSchema = SnowflakeSchema;
export const ChannelIdSchema = SnowflakeSchema;
