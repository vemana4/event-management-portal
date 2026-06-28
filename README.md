# Event Management Portal

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org) [![pnpm](https://img.shields.io/badge/Manager-pnpm-orange)](https://pnpm.io) [![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel--Ready-black)](https://vercel.com)

The Event Management Portal is a highly scalable, enterprise-ready monorepo meticulously designed to streamline the entire lifecycle of campus, corporate, and large-scale public events. Engineered with a cutting-edge, modern technology stack, it pairs an incredibly fast React and Vite frontend with a highly robust Node.js and Express backend. The entire codebase is strictly typed with TypeScript, while API boundaries and data payloads are rigorously validated in real-time using Zod schemas, guaranteeing type safety and eliminating a vast category of runtime errors.

At the data layer, the platform relies on the battle-tested reliability of PostgreSQL, managed seamlessly through the Drizzle ORM. This ensures that complex relational queries, such as concurrent ticketing allocations and multi-tiered attendee registrations, are executed safely and efficiently. Security is treated as a first-class citizen, featuring seamless OAuth2 integration for secure, decentralized user authentication, alongside robust session management and role-based access controls (RBAC) to separate standard attendees from event administrators and financial auditors.

Event organizers benefit immensely from the platform's rich, interactive frontend experience. The portal includes dynamic category filtering, automated waitlist management, and real-time RSVP tracking that updates instantly across all connected clients. Comprehensive analytics dashboards and gamified leaderboards provide immediate, actionable insights into attendee engagement and ticket sales velocity. Furthermore, the entire architecture is fully containerized and optimized for one-click, zero-downtime deployments on modern cloud platforms like Vercel and Render.

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
