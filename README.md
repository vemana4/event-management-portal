# 🏛️ College Event Portal Monorepo

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org) [![pnpm](https://img.shields.io/badge/Manager-pnpm-orange)](https://pnpm.io) [![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel--Ready-black)](https://vercel.com)

A full-stack, pixel-perfect management system for campus events. Features OAuth2 authentication, real-time RSVP dashboard analytics, category filters, and leaderboards, fully configured for Vercel and Render deployments.

## 🚀 Key Technologies
- **Backend Server**: Node.js, Express, TS, PostgreSQL (Drizzle ORM), Pino Logging
- **Frontend Portal**: React, TypeScript, Vite, CORS credentials configuration
- **Schema Verification**: Zod API schema sync

## 📦 Getting Started & Installation
```bash
# Install packages
pnpm install

# Setup local environment configs
cp .env.example .env

# Build project
pnpm build

# Run the project in development mode
pnpm dev
```

## 📜 License
This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
