# Guild0 Web

The Guild0 web app is the Discord dashboard for authentication, guild selection, and future server management features.

## Status

The app is in early development. It has the initial Next.js App Router structure, Better Auth route handler, Discord login button, shared UI integration, and environment validation. Product dashboard routes are still being built.

## Stack

- **Framework**: Next.js 16 App Router
- **UI**: React 19, Tailwind CSS v4, shared `@guild0/ui`
- **Auth**: Better Auth with Discord OAuth
- **Database access**: Shared `@guild0/db`
- **Validation**: Zod

## Environment

Create a local environment file from the example:

```bash
cp apps/web/.env.example apps/web/.env
```

Required values:

| Variable | Purpose |
| --- | --- |
| `BETTER_AUTH_SECRET` | Better Auth secret used for signing and encryption-related auth operations |
| `BETTER_AUTH_URL` | Base URL of the web app |
| `DISCORD_CLIENT_ID` | Discord OAuth application client ID |
| `DISCORD_CLIENT_SECRET` | Discord OAuth application client secret |
| `DISCORD_BOT_TOKEN` | Bot token used for Discord bot API requests |
| `DATABASE_URL` | PostgreSQL/Neon connection string |
| `NEXT_PUBLIC_URL` | Public app URL |

For local Discord OAuth development, configure the Discord Developer Portal redirect URL to:

```text
http://localhost:3000/api/auth/callback/discord
```

## Development

Run from the repository root:

```bash
pnpm --filter web dev
```

Run from this directory:

```bash
pnpm dev
```

The app runs on port `3000`.

## Scripts

```bash
pnpm --filter web build
pnpm --filter web start
pnpm --filter web check-types
pnpm --filter web lint
pnpm --filter web format
```

## Important Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/login` | Discord sign-in page |
| `/api/auth/[...all]` | Better Auth API handler |

## Next Steps

- Add the post-login dashboard route.
- Protect dashboard routes with server-side session checks.
- Add guild authorization checks before exposing guild data.
- Add error and not-found boundaries.
- Add tests for auth, redirects, and protected routes.
