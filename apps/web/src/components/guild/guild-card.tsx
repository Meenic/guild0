import type { Guild } from "@guild0/db/schema";
import { cn } from "@guild0/ui/lib/utils";
import Image from "next/image";

type DashboardRole = "OWNER" | "ADMIN" | "MODERATOR" | "VIEWER";

interface GuildCardProps {
  guild: Guild;
  role: DashboardRole;
  iconUrl: string | null;
}

const roleBadge: Record<DashboardRole, string> = {
  OWNER: "bg-emerald-100 text-emerald-700",
  ADMIN: "bg-blue-100 text-blue-700",
  MODERATOR: "bg-amber-100 text-amber-700",
  VIEWER: "bg-slate-100 text-slate-700",
};

export function GuildCard({ guild, role, iconUrl }: GuildCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <div className="shrink-0">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt={`${guild.name} icon`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
            {guild.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-semibold text-card-foreground">
          {guild.name}
        </h3>
        <span
          className={cn(
            "inline-block mt-1 rounded-full px-2 py-0.5 text-xs font-medium",
            roleBadge[role],
          )}
        >
          {role}
        </span>
      </div>
    </div>
  );
}
