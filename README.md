# Hacker News

Интерфейс для сайта [Hacker News](https://news.ycombinator.com/news), состоящий из двух страниц.

## Продуктовые требования

### Главная страница
- Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
- Каждая новость содержит:
  - название
  - рейтинг
  - ник автора
  - дату публикации
- По клику на новость происходит переход на страницу новости
- Список новостей должен автоматически обновляться раз в минуту без участия пользователя
- На странице должна быть кнопка для принудительного обновления списка новостей

### Страница новости
- Должна содержать:
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - список комментариев в виде дерева
- Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
- На странице должна быть кнопка для принудительного обновления списка комментариев
- На странице должна быть кнопка для возврата к списку новостей

## Технические требования
- Приложение разработано с использованием React 
- Использование TypeScript
- Использован официальный [API Hacker News](https://github.com/HackerNews/API). Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда
- Роутинг выполнен с использованием [React Router V6](https://reactrouter.com/en/main)
- Фреймворк UI любой на ваше усмотрение (как пример [MUI](https://mui.com/)).
  - Можно и на чистом css, главное, чтобы было красиво
- Приложение должно запускаться по адресу localhost:3000 
- При переходах по ссылкам страница не перезагружается
- Исходный код решения должен быть выложен с вашего аккаунта на [Github](http://github.com/) с Readme файлом с инструкцией по запуску

<br>

## Инструкция по запуску
В директории прооекта вы можете запустить: 

### <code>npm install</code> 
Установка npm
### <code>npm run dev</code> 
Запускает приложение в режиме разработки. \
Открыть http://localhost:3000 чтобы просмотреть в вашем браузере. \
\
Страница перезагрузится, если вы внесете изменения.\
Вы также можете увидеть любые ошибки lint в консоли.
### <code>npm run build</code>
Создает приложение для производства в папке build. \
Он правильно связывает React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности. \
Сборка минифицирована, и имена файлов включают хэши. \
\
Приложение готово к развертыванию!

<br>

## Ссылка на проект :
✨ **[Hacker News](https://master--deft-pasca-8dd828.netlify.app/)**
