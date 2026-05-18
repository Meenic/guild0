# Guild0 Bot

The Guild0 bot workspace is reserved for the Discord bot that will synchronize guild data and power dashboard features.

## Status

The bot is not implemented yet. This workspace currently contains planning documentation and an environment example only.

## Planned Responsibilities

- Connect to Discord as the Guild0 bot.
- Listen for guild lifecycle events.
- Synchronize guild metadata into the shared database.
- Track bot membership across Discord servers.
- Provide the dashboard with reliable guild state.
- Support future moderation, logging, welcome, and role-management features.

## Planned Stack

- **Runtime**: Node.js 22+
- **Language**: TypeScript
- **Package manager**: pnpm
- **Monorepo tooling**: Turborepo
- **Database**: shared `@guild0/db`
- **Configuration**: app-scoped environment variables

## Environment

Create a local bot environment file from the example:

```bash
cp apps/bot/.env.example apps/bot/.env
```

Required values:

| Variable | Purpose |
| --- | --- |
| `DISCORD_BOT_TOKEN` | Discord bot token |
| `DATABASE_URL` | PostgreSQL/Neon connection string |

## Future Development

Once the bot has its own `package.json` and scripts, it should be runnable from the repository root with:

```bash
pnpm --filter bot dev
```

## Implementation Notes

- Keep bot secrets server-only.
- Handle Discord rate limits explicitly.
- Sync Discord state into the database instead of relying only on live dashboard API calls.
- Keep dashboard authorization checks in the web app/server layer, even when bot-synced data exists.
