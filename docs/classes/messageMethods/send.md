---
title: send
description: "Отправляет сформированное сообщение."
sidebarDepth: 0
---

# send
Метод отправляет сообщение

## Параметры метода
| # |  Название   |           Тип           |
|:-:|:-----------:|:-----------------------:|
| 1 | **chat_id** | `int`\|`string`\|`null` |

## Возвращает
`array` - ответ от Телеграма, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/send')->func(function(ZG $tg) {
    $tg->msg("Отправка сообщения")
        ->send();
});

$bot->onBotCommand('/sendChatID')->func(function(ZG $tg) {
    $tg->msg("Отправка сообщения в чат с id = 123")
        ->send(123);
});

$bot->run();
```
