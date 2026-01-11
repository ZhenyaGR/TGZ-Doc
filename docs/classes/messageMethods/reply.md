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
`Message`|`Action` - экземпляр класса Message или Action, содержащий информацию о сообщении

::: tip Контекст вызова
Этот метод реализован через общий трейт и возвращает текущий экземпляр объекта.</br>
Тип возвращаемого значения зависит от того, какой класс вы используете в данный момент:
*   При вызове у экземпляра **Message** вернется объект `Message`.
*   При вызове у экземпляра **Action** вернется объект `Action`.
    :::

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
