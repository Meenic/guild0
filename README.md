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

Create the database tooling environment file when running Drizzle commands:

```bash
cp packages/db/.env.example packages/db/.env.local
```

Use the same local database URL as the app during local development, or a dedicated migration/admin URL for shared environments.

## Development

Start all development tasks:

```bash
pnpm dev
```

Start only the web dashboard:

```bash
pnpm dev:web
```

The web app reads `.env*` files from `apps/web`. Drizzle Kit reads database tooling values from `packages/db/.env.local` or `packages/db/.env`.

## Production

Build the web dashboard from the repository root:

```bash
pnpm build:web
```

Start the built Next.js server:

```bash
pnpm start:web
```

In production, set secrets in the deployment platform instead of committing `.env` files. The web runtime needs `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `DISCORD_CLIENT_ID`, `DISCORD_CLIENT_SECRET`, `DISCORD_BOT_TOKEN`, `DATABASE_URL`, and `NEXT_PUBLIC_URL`.

Run database migrations as a separate release step:

```bash
pnpm db:migrate
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
pnpm db:generate
pnpm db:migrate
pnpm db:studio
```

## Environment Variables

Environment examples are scoped to the runtime that owns them:

- `apps/web/.env.example`
- `apps/bot/.env.example`
- `packages/db/.env.example`

Keep real `.env*` files out of git. Application secrets should live with the app that runs them, while shared packages should define the variables they require and receive them from the consuming app or deployment runtime.

### Shared vs isolated variables

| Variable | Owner | Sharing guidance |
| --- | --- | --- |
| `DATABASE_URL` | Web, bot, DB tooling | Shared service, but prefer separate credentials per app/environment when possible |
| `DISCORD_BOT_TOKEN` | Bot/server workflows | Server-only; expose to web only if server routes need direct bot API calls |
| `DISCORD_CLIENT_ID` | Web auth | May be public-ish metadata, but keep in server env unless needed client-side |
| `DISCORD_CLIENT_SECRET` | Web auth | Web server only |
| `BETTER_AUTH_SECRET` | Web auth | Web server only; high entropy and at least 32 characters |
| `BETTER_AUTH_URL` | Web auth | Per environment base URL |
| `NEXT_PUBLIC_URL` | Web browser/server | Public and build-time inlined by Next.js |

### Environment tiers

| Tier | Files/source | Notes |
| --- | --- | --- |
| Local | `apps/web/.env.local`, `packages/db/.env.local`, future `apps/bot/.env.local` | Developer-specific and gitignored |
| Test | `.env.test` where needed | Commit safe non-secret defaults; keep `.env.test.local` ignored |
| Staging | Deployment platform secrets | Use staging Discord OAuth redirect URLs and staging database credentials |
| Production | Deployment platform secrets | Use production OAuth redirect URLs, production database credentials, and rotated secrets |

## License

MIT
