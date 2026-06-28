# Event Management Portal

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org) [![pnpm](https://img.shields.io/badge/Manager-pnpm-orange)](https://pnpm.io) [![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel--Ready-black)](https://vercel.com)

The Event Management Portal is a highly scalable, pixel-perfect monorepo designed to streamline the entire lifecycle of campus and corporate events. Engineered with a modern technology stack, it utilizes a React and Vite frontend paired with a Node.js and Express backend, fully typed with TypeScript and validated via Zod schemas. The data layer is powered by PostgreSQL and managed through the Drizzle ORM, ensuring robust and type-safe database queries. Key features include seamless OAuth2 authentication for secure user access, dynamic category filtering, and real-time RSVP tracking. Event organizers benefit from comprehensive analytics dashboards and leaderboards that provide immediate insights into attendance and engagement, making it the ultimate tool for seamless event execution and deployment on platforms like Vercel or Render.

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
