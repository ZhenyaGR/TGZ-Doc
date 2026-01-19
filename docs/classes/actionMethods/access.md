---
title: access
description: "Ограничивает доступ к маршруту по ID пользователя (белый список)."
url: /classes/actionMethods/access.md
---

# access

Метод задает массив ID-пользователей, которые имеют доступ к обработчику.

## Параметры

| # |  Название   |           Тип            | Описание                                                 |
|:-:|:-----------:|:------------------------:|:---------------------------------------------------------|
| 1 |   **ids**   | `int`\|`string`\|`array` | ID-пользователей, которые смогут использовать обработчик |
| 2 | **handler** |    `callable`\|`null`    | Анонимная функция-обработчик                             |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

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
    ->func(function(ZG $tg, string $username) {
        $tg->msg("✅ Пользователь `{$username}` забанен")->send();
    })
    ->access(123456); // Только пользователь с ID 123456 может использовать команду

```

## Пример использования с обработчиком

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban {user}')
    ->func(function(ZG $tg, $user) {
        $tg->msg("✅ Пользователь `{$user}` забанен")->send();
        
    })
    ->access(123456, function(ZG $tg) {
        $tg->msg("Доступ запрещен")->send(); 
        // Отправит сообщение, если попробует использовать пользователь с ID не равным 123456
    });

```