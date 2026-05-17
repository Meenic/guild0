# Guild0

A monorepo for building a Discord bot and its dashboard.

## What's inside

| App / Package | Description |
|---|---|
| `apps/web` | Dashboard app built with Next.js |
| `apps/bot` | Discord bot workspace |
| `packages/ui` | Shared UI components (shadcn/ui) |
| `packages/db` | Database client (Drizzle ORM) |
| `packages/tsconfig` | Shared TypeScript configuration |
| `packages/auth` | Authentication utilities |

## Tech Stack

- **Package Manager** — pnpm
- **Monorepo** — Turborepo + pnpm workspaces
- **Web** — Next.js 16, Tailwind CSS v4, shadcn/ui
- **Database** — Drizzle ORM + Neon

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Meenic/guild0.git
cd guild0

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Start development
pnpm dev
```

## Requirements

- [pnpm](https://pnpm.io) 10+
- [Node.js](https://nodejs.org) 22+

## Project Status

Early development. Not production-ready yet.

## License

MIT
