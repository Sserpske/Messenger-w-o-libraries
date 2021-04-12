# Мессенджер

## Запуск проекта

1. Установить зависимости `npm ci`
2. Запустить сборку `npm run build` для прода, `npm run dev` для дев-режима

## Разные допы и хелперы проекта  
- Запуск тестов `npm run test`
- Запуск prettier приведёт код к кодстайлу `npm run pretty`
- Запустить линтер `npm run lint`

## Docker
- Собрать образ `docker build . --tag <app-name>`
- Запустить контейнер `docker run --publish 8080:3000 <app-name>`

## Страницы

1. / - страница регистрации
2. /auth - авторизация
3. /chat - список чатов и лента переписки
4. /profile - профиль
5. /edit_profile - изменение профиля
6. /404 - 404 ошибка
7. /500 - 500 ошибка

[Ссылка](https://peaceful-hodgkin-c33196.netlify.app/) на приложение в Netlify.  
[Ссылка](https://biryuza.herokuapp.com/) на приложение в Heroku.  
[Ссылка](https://www.figma.com/file/hObqNtfawSoaepH31ebwXC/Chat-Biryuza?node-id=0%3A1) на макет в
Фигме.
