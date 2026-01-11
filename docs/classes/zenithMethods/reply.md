---
title: reply
description: "Отправляет ответ на текущее сообщение (сокращенный метод)."
sidebarDepth: 0
---

# ZG::reply
Метод отправляет сообщение в чат в коротком формате;

:::tip ZG::reply
Метод принадлежит классу ZG и никак не связан с одноименным методом классов Message и Action.
:::

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

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onText()->func(function(ZG $tg) {
    $tg->reply('Привет!');
});

$bot->run();
```