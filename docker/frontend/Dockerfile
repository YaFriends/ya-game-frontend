FROM node:14.17.6
# Утсанавливаем раб. директорию
WORKDIR /var/www

# Копируем всё что нужно из локальной папки в образ
COPY . .
ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}
# Запускаем сервак
CMD ./scripts/start.sh
