---
title: sendMessage
description: "Отправляет текстовое сообщение в указанный чат (прямой метод)."
---

# sendMessage
Метод отправляет сообщение в чат.

:::tip Это простой метод
Этот метод, в отличие от msg(), простая обёртка над Bot API  
Он не является конструктором, Это обычная отправка сообщения.
:::

## Параметры метода
| # |  Название   |       Тип       |      Описание       |
|:-:|:-----------:|:---------------:|:-------------------:|
| 1 | **chat_id** | `int`\|`string` | ID чата-получателя  |
| 2 |  **text**   |    `string`     |   Текст сообщения   |
| 3 | **params**  | `array`\|`null` | Параметры сообщения |

## Возвращает
`array` - Массив с ответом от Telegram.

## Подключение и инициализация
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onText()->func(function(ZG $tg) {
    $chat_id = $tg->getChatId();
    $tg->sendMessage($chat_id, 'Привет!');
});

$bot->run();
```