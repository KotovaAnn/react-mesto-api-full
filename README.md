# react-mesto-api-full
## Проект "Место" Бэкэнд + Фронтенд  

### Цели и задачи  
  
Основная задача проекта реализовать слияние фронтенда и бэкенда проекта "Место" и развернуть приложение на виртуальной машине с использованием Яндекс.Облако  

### Ссылки на проект  
Проект находится по ссылке: [Mesto React-Express](https://kotova.mesto.nomoredomains.sbs/)
IP 51.250.81.126
Frontend [Mesto Frontend](https://kotova.mesto.nomoredomains.sbs/)
Backend [Mesto Backend](https://api.kotova.mesto.nomoredomains.sbs/)
  
### Реализация проекта  
  
В проекте реализовано приложение на React с использованием Node.js, Express. Приложение позволяет пользователям регистрироваться, входить на страницу с информацией о себе (имя, о себе, аватар, электронная почта). На странице, куда попадает пользователь реализованы карточки с картинками. Можно добавить новую, удалить старые карточки. Проект задействует две сущности: пользователи, карточки. Приложение использует бащу данных `Mongoose`, где созданы схемы и модели с валидацией. Все роуты приложения защищены авторизацией (миделвера auth). Проверка авторизации реализована с использованием токена, который приходит в запросе. Срок жизни токена - неделя.
Валидация запросов реализована с помощью `Joi` и `celebrate`. Контролеры реализуют логику обработки запросов.
База данных хранит пароли пользователей в защищенном виде с помощью хеша, использован модуль `bcryptjs`.
Ошибки обрабатываются централизовано. Обработка ошибок использует конструкторы ошибок, которые передаются с помощью next в блоках catch, а дальше в мидлверу для обработки ошибок.
Применено логирование запросов с помощью библиотеки `Winston` и мидлвэры `express-winston`.
Для разворачивания приложения задействован облачный сервис [Яндекс.Облако](https://cloud.yandex.ru/).
  
## Стек

- HTML, CSS
- Javascript
- React
- Node
- Express
- MongoDB
