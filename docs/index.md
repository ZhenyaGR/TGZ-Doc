---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TGZ"
  text: "Библиотека для создания ботов в Telegram"   
  tagline: "Главное - Z!"
  image:
#    src: /logo.png
    alt: SimpleVK
  actions:
    - theme: brand
      text: Начало работы
      link: /install/who_simplevk
    - theme: alt
      text: Примеры ботов
      link: /install/examples
    - theme: alt
      text: "GitHub ↗"
      link: "https://github.com/zhenyagr/tgz/"

features:
  - title: 🌟 Простота и скорость
    details: Встроенный конструктор ботов и готовые модули для VK API позволяют писать меньше кода и запускать проекты быстрее.
  - title: 📝 Качественная документация
    details: Подробные примеры для каждой функции и практичные советы по использованию!
  - title: 🤖 Конструктор ботов
    details: Создавайте сложные сценарии с многоуровневыми клавиатурами и команды с помощью регулярных выражений.
    link: /install/bot_constructor
    linkText: Подробнее
  - title: 💬 Конструктор сообщений
    details: Создавайте сообщения с медиа, клавиатурами и параметрами в одну строку с удобным синтаксисом.
    link: /install/msg_constructor
    linkText: Подробнее
  - title: 🔍 Конструктор Inline-ответов
    details: Поддержка всех inline-ответов и удобный конструктор.
    link: /install/inline_constructor
    linkText: Подробнее
  - title: 🌐 Webhook и Long Poll
    details: Используйте тот тип API, который подходит именно вашему проекту.
  - title: 🐞 Ханлдер ошибок
    details: Автоматически ловит ошибки в боте и отправляет их вам в ЛС вместе с проблемным кодом и удобным трейсом.
  - title: 📎 Медиа-файлы
    details: Работайте с голосовыми сообщениями, документами, картинками, видео и другими вложениями.
  - title: ✂️ Прощает ошибки
    details: Автоматически разбивает длинные сообщения при отправке и разделяет количество медиа файлов
  - title: 🪶 Без зависимостей
    details: Фреймворк не имеет зависимостей от других библиотек
---