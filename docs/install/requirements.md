---
title: Установка и подключение
description: "Системные требования (PHP 8.2+) и инструкция по установке через Composer."
---

# Установка и подключение библиотеки

## Требования
* PHP: `8.2-8.4+`  
* Модуль: `mbstring` 
* Модуль: `curl`
* Модуль: `json` (Обычно включён по умолчанию)

## Установка PHP
Установка PHP описана на официальном сайте [php.net](https://www.php.net/downloads.php)  
Там есть описание для разных операционных систем.

## Подключение библиотеки, используя composer
1. Установка библиотеки
```bash
composer require zenithgram/zenithgram:dev-main
```

2. Подключить `autoload.php` напрямую внутри бота
```php
require_once __DIR__.'/vendor/autoload.php';
```

## Подключение библиотеки вручную
1. Скачать последний релиз c [github](https://github.com/ZenithGram/php-telegram-bot-library)
2. Подключить `autoload.php`.
> Вот так будет происходить подключение, если ваш бот находится в той же папке, что и папка `ZenithGram`
```php
require_once "ZenithGram/autoload.php";
```

## Подключение классов
Через конструкцию `use` подключите те классы, методы которых вы будете использовать.
```php
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\LongPoll;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Message;
use ZenithGram\ZenithGram\Button;
use ZenithGram\ZenithGram\Pagination;
use ZenithGram\ZenithGram\Poll;
use ZenithGram\ZenithGram\File;
use ZenithGram\ZenithGram\Inline;
```