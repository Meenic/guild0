# Guild0

Guild0 is a monorepo for a Discord bot and a web dashboard for managing Discord server tooling.

## Project Status

Guild0 is in early development and is not production-ready yet. The dashboard, authentication, shared UI, and database packages exist, while the bot workspace is still a placeholder.

## Workspaces

| Workspace | Purpose |
| --- | --- |
| `apps/web` | Next.js dashboard application |
| `apps/bot` | Planned Discord bot application |
| `packages/auth` | Better Auth configuration and client helpers |
| `packages/db` | Drizzle ORM schema, database client, and migrations |
| `packages/ui` | Shared Tailwind CSS and shadcn/ui-based components |
| `packages/tsconfig` | Shared TypeScript configuration |

## Stack

- **Runtime**: Node.js 22+
- **Package manager**: pnpm 10+
- **Monorepo**: pnpm workspaces and Turborepo
- **Web**: Next.js 16, React 19, Tailwind CSS v4
- **Auth**: Better Auth with Discord OAuth
- **Database**: Drizzle ORM with Neon/PostgreSQL
- **Formatting and linting**: Biome

## Setup

Install dependencies from the repository root:

```bash
pnpm install
```

Create the web environment file:

```bash
cp apps/web/.env.example apps/web/.env
```

If you are working on the bot workspace, create the bot environment file:

```bash
cp apps/bot/.env.example apps/bot/.env
```

Fill in the required Discord, Better Auth, and database values before running the apps.

## Development

Start all development tasks:

```bash
pnpm dev
```

Start only the web dashboard:

```bash
pnpm --filter web dev
```

## Quality Checks

Run type checks:

```bash
pnpm check-types
```

Run linting:

```bash
pnpm lint
```

Format files:

```bash
pnpm format
```

## Database

Database commands live in `packages/db`:

```bash
pnpm --filter @guild0/db db:generate
pnpm --filter @guild0/db db:migrate
pnpm --filter @guild0/db db:studio
```

## Environment Variables

The current environment examples are app-scoped:

- `apps/web/.env.example`
- `apps/bot/.env.example`

The dashboard expects Discord OAuth credentials, a Discord bot token, Better Auth settings, and a PostgreSQL connection string.

## License

MIT
