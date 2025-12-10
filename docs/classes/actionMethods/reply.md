---
title: reply
description: "Делает сообщение ответом (reply) на входящее."
---

# reply
Метод добавляет ответ на сообщение по его id

## Параметры метода
| # |             Название              |      Тип      |
|:-:|:---------------------------------:|:-------------:|
| 1 |      **reply_to_message_id**      | `int`\|`null` |

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

$bot->onText('reply')
    ->reply()
    ->text('Привет!');

$bot->run();
```