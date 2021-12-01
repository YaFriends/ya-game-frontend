FROM node:12-alpine
WORKDIR /var/www
COPY . .
RUN yarn && yarn build
EXPOSE 8080
CMD node server.js