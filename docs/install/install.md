---
title: Подключение
---

# Подключение
## Используя composer
1. Установка библиотеки
```bash
composer require zhenyagr/tgz:dev-main
```
2. Подключить `autoload.php` напрямую внутри бота
```php
require_once __DIR__.'/vendor/autoload.php';
```
## Вручную
1. Скачать последний релиз c [github](https://github.com/ZhenyaGR/TGZ)
2. Подключить `autoload.php`.
> Вот так будет происходить подключение, если ваш бот находится в той же папке, что и папка `tgz`
```php
require_once "tgz/autoload.php";
```

## Подключение классов  
Через конструкцию `use` подключите те классы, методы которых вы будете использовать.
```php
use ZhenyaGR\TGZ\TGZ
use ZhenyaGR\TGZ\LongPoll
use ZhenyaGR\TGZ\PollBuilder
use ZhenyaGR\TGZ\Message
use ZhenyaGR\TGZ\Bot
use ZhenyaGR\TGZ\ErrorHandler
use ZhenyaGR\TGZ\Inline
```