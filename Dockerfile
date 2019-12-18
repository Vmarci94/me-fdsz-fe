# base image
FROM node:latest AS builder

# set working directory
WORKDIR /app

COPY . .
RUN npm install && npm install -g @angular/cli@8.3.19 && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/






