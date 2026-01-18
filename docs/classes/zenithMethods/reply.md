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

:::danger Не конструктор!
Этот метод — простая обёртка над Bot API.
1. Он **сразу** отправляет сообщение.
2. Он **возвращает array** (массив с ответом Telegram), а не объект.
3. К нему **нельзя** применять цепочки методов (`->parseMode()`, `->send()` и т.д.).
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

$bot->onMessage()->func(function(ZG $tg) {
    $tg->reply('Привет!');
    // $tg->reply('Привет!')->parseMode(...)->send();
    // ЭТО ВЫЗОВЕТ ОШИБКУ! reply() НЕ ЯВЛЯЕТСЯ ЦЕПОЧКОЙ
});


$bot->run();
```