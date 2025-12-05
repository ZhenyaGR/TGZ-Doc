---
title: sticker
description: "Отправляет стикер."
---

# sticker
Метод отправляет стикер

## Параметры

| # |  Название   |   Тип    | Описание   |
|:-:|:-----------:|:--------:|:-----------|
| 1 | **sticker** | `string` | ID стикера |

## Возвращает

`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`,`func` и т.д.).

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);
$sticker_id = 'AgACAgIAAxkBAAII...';

$bot->onText('sticker')
    ->sticker($sticker_id);

$bot->run();
```