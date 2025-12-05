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
composer require zhenyagr/tgz:dev-main
```

2. Подключить `autoload.php` напрямую внутри бота
```php
require_once __DIR__.'/vendor/autoload.php';
```

## Подключение библиотеки вручную
1. Скачать последний релиз c [github](https://github.com/ZhenyaGR/TGZ)
2. Подключить `autoload.php`.
> Вот так будет происходить подключение, если ваш бот находится в той же папке, что и папка `tgz`
```php
require_once "tgz/autoload.php";
```

## Подключение классов
Через конструкцию `use` подключите те классы, методы которых вы будете использовать.
```php
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\LongPoll;
use ZhenyaGR\TGZ\Poll;
use ZhenyaGR\TGZ\File;
use ZhenyaGR\TGZ\Message;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Inline;
```