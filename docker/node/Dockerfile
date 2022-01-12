FROM node:14.17.6
# Утсанавливаем раб. директорию
WORKDIR /var/www

# Копируем всё что нужно из локальной папки в образ
COPY . .

# Устанавливаем все только нужно
RUN yarn install --frozen-lockfile && yarn build && npx msw init dist/ --save

# Шарим порт
EXPOSE 8080

# Запускаем сервак
CMD node server.js
CMD node backend/index.js
