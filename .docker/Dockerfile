FROM node:20-alpine AS base

ARG UID=1000
ARG GID=1000

ARG MSW=0

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN if [ "${MSW}" = "0" ]; then npm run build; \
  else npm run build:test; \
  fi

FROM base AS runner
RUN apk add --no-cache shadow
WORKDIR /app

ENV NODE_ENV production


RUN usermod --uid ${UID} node
RUN groupmod --non-unique --gid ${GID} node

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
