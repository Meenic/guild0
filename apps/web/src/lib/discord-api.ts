import type { DiscordGuild } from "@guild0/types";
import { env } from "@/env";

const DISCORD_API = "https://discord.com/api/v10";

// User and guild

export async function getUserGuilds(
  accessToken: string,
): Promise<DiscordGuild[]> {
  const res = await fetch(`${DISCORD_API}/users/@me/guilds`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error("Failed to fetch user guilds");
  return res.json();
}

// Bot API

export async function getBotGuilds(): Promise<DiscordGuild[]> {
  const res = await fetch(`${DISCORD_API}/users/@me/guilds`, {
    headers: { Authorization: `Bot ${env.DISCORD_BOT_TOKEN}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error("Failed to fetch bot guilds");
  return res.json();
}

// Construct avatar URL or default avatar

export function avatarUrl(
  user: { id: string; avatar: string | null },
  size = 128,
): string {
  if (user.avatar) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=${size}`;
  }
  const defaultIndex = Number(BigInt(user.id) >> 22n) % 6;
  return `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
}

export function guildIconUrl(
  guild: { id: string; icon: string | null },
  size = 128,
): string | null {
  if (!guild.icon) return null;
  const ext = guild.icon.startsWith("a_") ? "gif" : "webp";
  return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}?size=${size}`;
}
