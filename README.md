# Monorepo

A monorepo powered by [Turborepo](https://turbo.build) and [pnpm workspaces](https://pnpm.io/workspaces).

## Structure

```
.
├── apps/
│   ├── web/          # Next.js web application
│   └── api/          # Node.js API server
└── packages/
    ├── ui/           # Shared React component library
    ├── utils/        # Shared utility functions
    ├── tsconfig/     # Shared TypeScript configurations
    └── eslint-config/ # Shared ESLint configurations
```

## Getting started

```bash
# Install dependencies
pnpm install

# Start all apps in dev mode
pnpm dev

# Build all packages and apps
pnpm build

# Typecheck everything
pnpm typecheck

# Lint everything
pnpm lint

# Format everything
pnpm format
```

## Adding a new package

```bash
mkdir packages/my-package
cd packages/my-package
pnpm init
```

Then add `"@repo/tsconfig": "workspace:*"` and `"@repo/eslint-config": "workspace:*"` to its `devDependencies`.
