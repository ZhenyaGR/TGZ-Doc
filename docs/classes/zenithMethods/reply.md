---
title: reply
description: "Отправляет ответ на текущее сообщение (сокращенный метод)."
sidebarDepth: 0
---

# reply
Метод отправляет сообщение в чат в коротком формате;

:::tip Это простой метод
Этот метод, в отличие от msg(), простая обёртка над Bot API  
Он не является конструктором, Это обычная отправка сообщения.
:::

## Параметры метода
| # |  Название  |       Тип       |      Описание       |
|:-:|:----------:|:---------------:|:-------------------:|
| 1 |  **text**  |    `string`     |   Текст сообщения   |
| 2 | **params** | `array`\|`null` | Параметры сообщения |

## Возвращает
`array` - Массив с ответом от Telegram.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onText()->func(function(ZG $tg) {
    $tg->reply('Привет!');
});

$bot->run();
```