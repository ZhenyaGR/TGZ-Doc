---
title: sendMessage
description: "Отправляет текстовое сообщение в указанный чат (прямой метод)."
---

# sendMessage
Метод отправляет сообщение в чат.

## Параметры метода
| # |  Название  |       Тип       |      Описание       |
|:-:|:----------:|:---------------:|:-------------------:|
| 1 | **chatID** |      `int`      | ID чата-получателя  |
| 2 |  **text**  |    `string`     |   Текст сообщения   |
| 3 | **params** | `array`\|`null` | Параметры сообщения |

## Возвращает
`array` - Массив с ответом от Telegram.

## Подключение и инициализация
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН_БОТА');
$chat_id = $tg->getChatId();

$tg->sendMessage($chat_id, 'Привет, мир!');
```