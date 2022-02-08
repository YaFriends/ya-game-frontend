FROM node:14.17.6
# Утсанавливаем раб. директорию
WORKDIR /var/www/backend

COPY . .
RUN yarn install
CMD ./scripts/start.sh
