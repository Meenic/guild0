import { GuildCard } from "@/components/guild/guild-card";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { requireSession } from "@/lib/auth/session";
import { getUserGuildList } from "@/lib/data/guild-data";
import { guildIconUrl } from "@/lib/discord-api";

export default async function GuildsPage() {
  const session = await requireSession();
  const memberships = await getUserGuildList(session.user.id);

  return (
    <MaxWidthWrapper className="flex flex-col items-center py-24 sm:py-32">
      <h1 className="text-3xl font-medium mb-2">Your Servers</h1>
      <p className="mb-8">Select a server to manage</p>

      {memberships.length === 0 ? (
        <div className="py-16 text-muted-foreground">
          <p>No servers found. Add the bot to a server first.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {memberships.map((m) => (
            <GuildCard
              key={m.guildId}
              guild={m.guild}
              role={m.role}
              iconUrl={guildIconUrl(m.guild)}
            />
          ))}
        </div>
      )}
    </MaxWidthWrapper>
  );
}
