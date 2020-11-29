FROM node:13

WORKDIR /app

COPY . /app

RUN npm ci && npm run build

EXPOSE 4000

CMD node server.js