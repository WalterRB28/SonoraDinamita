FROM node:22.11.0

WORKDIR /app

COPY package*.json .

RUN npn ci --only=production
COPY . .

CMD ["node", "server.js"]