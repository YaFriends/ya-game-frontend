# Проект игра "YaFriends"
Командный проект по разработке игры в рамках курса Яндекс Практикум.

## Наша команда
- Юрий aka YurikEz
    - **Роль** ```[Frontend, Task moving master, Designer]```
    - [**GitHub @YurikEz**](https://github.com/YurikEz)
- Роман aka Tenutes
    - **Роль** ```[Frontend, Backend, DevOps]```
    - [**GitHub @Tenutes**](https://github.com/Tenutes)
- Виген aka Venmovs
    - **Роль** ```[Frontend, Manager]```
    - [**GitHub @Venmovs**](https://github.com/Venmovs)

[**GitHub команды**](https://github.com/YaFriends)

## Макет проекта в [FIGMA](https://www.figma.com/file/wur0C1PNOUSAhQozhLP7Tp/)
## Технологии
- **Client** ```[React, Redux, React-Router, TypeScript, SCSS, Tailwind, Jest, Eslint, Prettier, Editorconfig, Webpack]```
- **Server** ```[Node, Express, PostgreSQL]```
- **Other** ```[Docker, Yandex Cloud]``` 

## Установка
Установить зависимости ```yarn```

## .env
Необходимо создать файл ```.env``` по примеру ```.env-example```

Поля:
```dotenv
API_EXTERNAL= # урл апишки яндекса
API_INTERNAL= # урл апишки ноды - бека

POSTGRES_USER= # юзер в базе
POSTGRES_PASSWORD= # пароль от юзера
POSTGRES_DB= # название бд

PGADMIN_DEFAULT_EMAIL= # email для логина в pgAdmin
PGADMIN_DEFAULT_PASSWORD= # password для pgAdmin
PGADMIN_LISTEN_PORT=# port для pgAdmin; 

BACKEND_PORT=# port для backend
```
    
## Команды для запуска
- Dev Сборка ```yarn start```
- Build проекта ```yarn build```
- Запустить на node сервере ```yarn server```
- Запустить тесты ```yarn test```

# Работа с Heroku
Настроен автодеплой на Heroku при обновлении ветки master

## Тесты
## Лицензия
[MIT](https://choosealicense.com/licenses/mit/)
