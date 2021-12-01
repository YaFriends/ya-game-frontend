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
    
## Команды для запуска
- Dev Сборка ```yarn start```
- Build проекта ```yarn build```
- Запустить на node сервере ```yarn server```
- Запустить тесты ```yarn test```

# Работа с Heroku
Для того, чтобы собрать наш проект на Heroku вам необходимо:
- Авторизоваться `yarn heroku-login`, пройти аунтификацию через браузер
- Войти в реестр контейнеров `yarn heroku-container-login`
- Проверить ваши приложения `yarn heroku-checked-apps`, если в полученном списке, есть нужный нам app, то используем его название в следующих командах после -a
- Если нет, то создадим репу в Heroku `yarn heroku-create` (Нужно указать свое название app)
- Пушим Docker образ в Heroku `yarn heroku-push` (Нужно указать свое название app)
- И релизим в Heroku `yarn heroku-release` (Нужно указать свое название app)

Если все шаги выше были выполнены правильно, то наш сайт откроется по команде `yarn heroku`

## Тесты
## Лицензия
[MIT](https://choosealicense.com/licenses/mit/)

