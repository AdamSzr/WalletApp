FROM node:16-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN pwd
RUN npx blitz prisma generate deploy
RUN echo DONE