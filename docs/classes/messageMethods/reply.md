---
title: reply
description: "Устанавливает ID сообщения для ответа."
sidebarDepth: 0
---

# reply
Метод добавляет ответ на сообщение по его id

## Параметры метода
| # |             Название              |      Тип      |
|:-:|:---------------------------------:|:-------------:|
| 1 |      **reply_to_message_id**      | `int`\|`null` |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/reply')->func(function(ZG $tg) {
    $tg->msg("Ответ на отправленное сообщение")
        ->reply()
        ->send();
});

$bot->onBotCommand('/replyToId')->func(function(ZG $tg) {
    $msg_id = 1234;
    $tg->msg("Ответ на сообщение по его id")
        ->reply($msg_id)
        ->send();
});

$bot->run();
```
