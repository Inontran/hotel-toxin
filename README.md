# Отель "Toxin"

Второе задание программы обучения от FSD(Metalamp) на фронтенд разработчика. Результатом выполненного задания является сверстанный сайт бронирования номеров отеля.

Ссылка на [макет сайта](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/).

### Список страниц
- [Главная страница](https://inontran.github.io/hotel-toxin/)
- [Style guide и UI-kit](https://inontran.github.io/hotel-toxin/guide.html)
- [Страница авторизации](https://inontran.github.io/hotel-toxin/login.html)
- [Страница номера отеля](https://inontran.github.io/hotel-toxin/product.html)
- [Страница каталога номеров](https://inontran.github.io/hotel-toxin/products.html)
- [Страница регистрации](https://inontran.github.io/hotel-toxin/register.html)

### Описание команд
Установка проекта:
```
npm install
```

Сборка проекта в режиме разработки:
```
npm run dev
```

Сборка проекта для продакшена:
```
npm run build
```

Собирать проект в режиме разработки и следить за изменениями в файлах исходного кода:
```
npm run watch
```

Собирать проект в режиме разработки и запустить его в dev-server:
```
npm run start
```

Получить статистику по js-коду в формате JSON и на html-странице в виде блочной диаграммы:
```
npm run stats
```

Проверка js/ts кода с помощью eslint:
```
npm run eslint
```

Автоматическое исправление простых ошибок js/ts кода с помощью eslint:
```
npm run eslint:fix
```

Вывод в консоль конфигурацию eslint:
```
npm run eslint:dump
```

Проверка стилей с помощью stylelint:
```
npm run stylelint
```

Исправление простых ошибок в стилях с помощью stylelint:
```
npm run stylelint:fix
```

### Описание команд для развертывания проекта в продакшене
Для отправки сайта в продакшен нужно сначала собрать проект командой:
```
npm run build
```

После отправить файлы собранного проекта на сервер хостинга:
```
npm run gulp:deploy
```

Или на Github-pages:
```
npm run gh-deploy
```