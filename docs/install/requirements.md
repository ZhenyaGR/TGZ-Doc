---
title: Установка и подключение
description: "Системные требования (PHP 8.2+) и инструкция по установке через Composer."
---

# Установка и подключение библиотеки

## Требования
* PHP 8.2 или выше
* Composer
* Расширения **PHP**: `mbstring`, `openssl`, `json`, `curl`

::: tip Примечание
Библиотека использует асинхронный движок Revolt. Для экстремальной производительности рекомендуется (но не обязательно) наличие расширения uv или ev.
:::

## Установка PHP
Установка PHP описана на официальном сайте [php.net](https://www.php.net/downloads.php)  
Там есть описание для разных операционных систем.

## Подключение библиотеки, используя composer
1. Установка библиотеки
```bash
composer require zenithgram/zenithgram
```

2. Подключить `autoload.php` напрямую внутри бота
```php
require_once __DIR__ . '/vendor/autoload.php';
```

## Подключение классов
Через конструкцию `use` подключите те классы, методы которых вы будете использовать.
```php
// Классы
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\LongPoll;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Message;
use ZenithGram\ZenithGram\Button;
use ZenithGram\ZenithGram\Pagination;
use ZenithGram\ZenithGram\Poll;
use ZenithGram\ZenithGram\File;
use ZenithGram\ZenithGram\Inline;

// Enum
use ZenithGram\ZenithGram\Enums\MessageParseMode;
use ZenithGram\ZenithGram\Enums\PaginationMode;
use ZenithGram\ZenithGram\Enums\PaginationLayout;
use ZenithGram\ZenithGram\Enums\PaginationNumberStyle;
```

