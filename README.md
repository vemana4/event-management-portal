# Event Management Portal

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org)
[![pnpm](https://img.shields.io/badge/Manager-pnpm-orange)](https://pnpm.io)
[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel--Ready-black)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

The Event Management Portal is a highly scalable, enterprise-ready monorepo meticulously designed to streamline the entire lifecycle of campus, corporate, and large-scale public events. Engineered with a cutting-edge, modern technology stack, it pairs an incredibly fast React and Vite frontend with a highly robust Node.js and Express backend. The entire codebase is strictly typed with TypeScript, while API boundaries and data payloads are rigorously validated in real-time using Zod schemas, guaranteeing type safety and eliminating a vast category of runtime errors.

At the data layer, the platform relies on the battle-tested reliability of PostgreSQL, managed seamlessly through the Drizzle ORM. This ensures that complex relational queries, such as concurrent ticketing allocations and multi-tiered attendee registrations, are executed safely and efficiently. Security is treated as a first-class citizen, featuring seamless OAuth2 integration for secure, decentralized user authentication, alongside robust session management and role-based access controls (RBAC) to separate standard attendees from event administrators and financial auditors.

Event organizers benefit immensely from the platform's rich, interactive frontend experience. The portal includes dynamic category filtering, automated waitlist management, and real-time RSVP tracking that updates instantly across all connected clients. Comprehensive analytics dashboards and gamified leaderboards provide immediate, actionable insights into attendee engagement and ticket sales velocity. Furthermore, the entire architecture is fully containerized and optimized for one-click, zero-downtime deployments on modern cloud platforms like Vercel and Render.

---

## ✨ Features

- **🏛️ Multi-Tenant Portal** — Handles multiple organizations, clubs, and admin roles.
- **⚡ Real-Time RSVPs** — Live ticket count down and seat reservations with instant socket updates.
- **📊 Global Leaderboard** — Gamified active engagement tracker for attendees based on checks/tickets.
- **🛡️ Zod API Schema Sync** — Strict static typing between React frontend forms and Express backend controllers.
- **📦 Relational Database Schema** — Clean Postgres layout with many-to-many relations for events, speakers, and users.

### 🖥️ Frontend Dashboard Views

| Dashboard View | File Path | Dynamic UI Components | State/Data Sync |
| :--- | :--- | :--- | :--- |
| **KPI Aggregate Panel** | `src/pages/dashboard.tsx` | Total RSVP counter, active events chart | Real-time WebSocket feed |
| **Global Leaderboard** | `src/pages/leaderboard.tsx` | Point-based ranking, visual score indicators | Zod Schema verified API |
| **Event Explorer** | `src/pages/events.tsx` | Nested category filters, status indicators | Drizzle-ORM API Query |
| **Ticketing Console** | `src/pages/ticketing.tsx` | Real-time capacity gauge, checkout form | Async Zod Mutation |

---

## 🏗️ Project Architecture

```
event-management-portal/
├── package.json               # Monorepo root package descriptor
├── pnpm-workspace.yaml        # Workspace definition (Monorepo)
├── pnpm-lock.yaml             # Shared packages lockfile
├── render.yaml                # Render platform infrastructure configuration
├── vercel.json                # Vercel serverless functions configuration
├── artifacts/                 # Core applications
│   ├── api-server/            # Express.js REST backend API
│   │   ├── src/
│   │   │   ├── app.ts         # Application entry point
│   │   │   ├── middlewares/   # Auth, logging, and error handlers
│   │   │   └── routes/        # RSVPs, events, and auth routes
│   │   └── package.json
│   │
│   ├── event-portal/          # Vite + React Client Dashboard
│   │   ├── src/
│   │   │   ├── App.tsx        # React root component
│   │   │   ├── components/    # Reusable UI components
│   │   │   ├── pages/         # Dashboard, events, and leaderboards
│   │   │   └── hooks/         # Custom queries and data hooks
│   │   └── package.json
│   │
│   └── mockup-sandbox/        # Prototype components tester
│
├── lib/                       # Shared modules
│   ├── api-client-react/      # Generated React query client
│   ├── api-spec/              # OpenAPI contracts and specifications
│   ├── api-zod/               # Shared validation schemas
│   └── db/                    # Drizzle migrations and schemas
│       ├── drizzle/           # Raw migration SQL queries
│       └── src/schema/        # Relational schema mappings
└── scripts/                   # Workspace development scripts
```

---

## 🛠️ Tech Stack

| Layer | Technology | Detail |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite | High-performance Single Page Application |
| **Backend** | Node.js, Express.js | Low-latency REST API Server |
| **Database** | PostgreSQL | Enterprise relational storage |
| **ORM** | Drizzle ORM | TypeScript first SQL mapper |
| **Validation** | Zod | End-to-end type schema enforcement |
| **Deployment** | Vercel & Render | Automated CDN and server orchestration |
| **Manager** | PNPM Workspaces | Fast monorepo package architecture |

---

## 🚀 Getting Started & Installation

### Prerequisites
- **Node.js 18+**
- **PostgreSQL 14+**
- **pnpm 8+**

### Setup & Initialization

```bash
# Clone the repository
git clone https://github.com/vemana4/event-management-portal.git
cd event-management-portal

# Install all workspace dependencies
pnpm install

# Setup environment config
cp .env.example .env
# Open .env and add your DATABASE_URL, CORS headers, etc.

# Push database schema and run migrations
pnpm --filter db db:push

# Build the entire monorepo
pnpm build

# Launch both backend and frontend concurrently in development mode
pnpm dev
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/vemana4">Vemana Hemanth Babu</a>
</p>
