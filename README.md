# guild0

Monorepo starter for Discord developers.

## What's inside

| App / Package | Description |
|---|---|
| `apps/web` | Discord bot dashboard (Next.js) |
| `apps/bot` | Discord bot (coming soon) |
| `packages/ui` | Shared UI components (shadcn/ui) |

## Tech Stack

- **Package Manager** — pnpm
- **Monorepo** — Turborepo + pnpm workspaces
- **Web** — Next.js 16, Tailwind CSS v4, shadcn/ui
- **Bot** — coming soon

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Meenic/guild0.git
cd guild0

# Install dependencies
pnpm install

# Set up environment variables
cp apps/web/.env.example apps/web/.env.local

# Start development
pnpm dev
```

## Requirements

- [pnpm](https://pnpm.io) 9+
- [Node.js](https://nodejs.org) 22+

## Project Status

Early development. Not production-ready yet.

## License

MIT
