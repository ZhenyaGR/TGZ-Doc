---
title: video
description: "Прикрепляет видео к ответу."
---

# video
Метод добавляет видео к автоматическому ответу

## Параметры

| # | Название  |        Тип        | Описание                                    |
|:-:|:---------:|:-----------------:|:--------------------------------------------|
| 1 | **video** | `string`\|`array` | Ссылка или массив ссылок (ID) на видео-файл |

## Возвращает

`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`,`func` и т.д.).

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\ZenithGram\ZG;
use ZhenyaGR\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onText('video')
    ->video('loading.mp4'); // Ссылка на локальный файл

$bot->run();
```