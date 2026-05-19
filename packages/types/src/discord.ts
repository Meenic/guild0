// Discord API v10 response shapes

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
}

export interface DiscordGuildMember {
  user?: {
    id: string;
    username: string;
    avatar: string | null;
  };
  nick: string | null;
  roles: string[];
  joined_at: string;
}

// Permission bitfield constants
export const DISCORD_PERMISSIONS = {
  ADMINISTRATOR: 0x8n,
  MANAGE_GUILD: 0x20n,
  MANAGE_ROLES: 0x10000000n,
  KICK_MEMBERS: 0x2n,
  BAN_MEMBERS: 0x4n,
} as const;
