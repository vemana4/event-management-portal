FROM node:18-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy monorepo configuration files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json tsconfig.json tsconfig.base.json ./

# Copy packages package.json files
COPY artifacts/api-server/package.json ./artifacts/api-server/
COPY artifacts/event-portal/package.json ./artifacts/event-portal/
COPY lib/api-client-react/package.json ./lib/api-client-react/
COPY lib/api-spec/package.json ./lib/api-spec/
COPY lib/api-zod/package.json ./lib/api-zod/
COPY lib/db/package.json ./lib/db/
COPY scripts/package.json ./scripts/

# Install workspace dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the source code
COPY . .

# Build libraries and api-server
RUN pnpm run build

# Expose API server port
EXPOSE 3000

ENV NODE_ENV=production

# Command to run the api-server
CMD ["pnpm", "--filter", "@workspace/api-server", "start"]
