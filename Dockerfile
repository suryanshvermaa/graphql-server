FROM node:23-alpine3.20 AS Builder

WORKDIR /build

COPY package.json .
RUN npm install
COPY tsconfig.json .
COPY src/ src/
COPY prisma/ prisma/

RUN npm run build

FROM node:23-alpine3.20 AS Runner

WORKDIR /app
COPY --from=Builder /build/package.json /app/package.json
RUN npm install --omit=dev
COPY --from=Builder /build/dist/ /app/dist/
COPY --from=Builder /build/prisma /app/prisma

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid  1001 nodejs
USER nodejs

EXPOSE 3000
ENV PORT=3000

ENTRYPOINT [ "npm", "start" ]