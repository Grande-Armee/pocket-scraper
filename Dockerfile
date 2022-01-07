FROM node:16-alpine AS development

RUN apk add --no-cache \
  chromium \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

USER node

# # Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
#   && mkdir -p /home/pptruser/Downloads /usr/src/app \
#   && chown -R pptruser:pptruser /home/pptruser \
#   && chown -R pptruser:pptruser /usr/src/app

# # Run everything after as non-privileged user.
# USER pptruser

FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

USER node

CMD ["node", "dist/main"]

FROM alpine

# Puppeteer v10.0.0 works with Chromium 92.
RUN yarn add puppeteer@10.0.0
