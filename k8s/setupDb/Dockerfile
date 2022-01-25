FROM node:16-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN pwd
RUN npx blitz prisma migrate deploy

RUN echo DONE