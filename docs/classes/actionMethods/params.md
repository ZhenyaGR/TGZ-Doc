---
title: params
description: "Добавляет дополнительные параметры API к запросу."
---

# params
Метод добавляет дополнительные параметры сообщения

## Параметры

| # |  Название  |   Тип   | Описание                           |
|:-:|:----------:|:-------:|:-----------------------------------|
| 1 | **params** | `array` | Дополнительные параметры сообщения |

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

$bot->onText('params')
    ->text('Неважное сообщение')
    ->params(['disable_notification' => true]); // Будет отправлено без уведомления

$bot->run();
```