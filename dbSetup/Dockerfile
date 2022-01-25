FROM node:16-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN pwd

CMD npx blitz prisma generate deploy