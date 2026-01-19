---
title: noAccess
description: "Запрещает доступ к маршруту по ID пользователя (черный список)."
---

# noAccess
Метод `noAccess` задает массив ID-пользователей, которые не имеют доступ к обработчику.

## Параметры
| # |  Название   |           Тип            |                          Описание                           |
|:-:|:-----------:|:------------------------:|:-----------------------------------------------------------:|
| 1 |   **ids**   | `int`\|`string`\|`array` | ID-пользователей, которые не смогут использовать обработчик |
| 2 | **handler** |    `callable`\|`null`    |                Анонимная функция-обработчик                 |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`,
`func` и т.д.).

## Аргументы обработчика
- `ZG $tg` - экземпляр класса ZG.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban {username}')
    ->func(function(ZG $tg, $username) {
        $tg->msg("✅ Пользователь `{$username}` забанен")->send();
        
    })
    ->noAccess(123456); // Только пользователь с ID 123456 не может использовать команду

$bot->run();
```

## Пример использования с обработчиком

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban {username}')
    ->func(function(ZG $tg, $username) {
        $tg->msg("✅ Пользователь `{$username}` забанен")->send();
    })
    ->noAccess(123456, function(ZG $tg) {
        $tg->msg("Доступ запрещен")->send(); 
        // Отправит сообщение, если попробует использовать пользователь с ID равным 123456
    });

$bot->run();
```