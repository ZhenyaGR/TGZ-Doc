---
title: Action
url: /classes/access.md
---

# access

Метод задает массив ID-пользователей, которые имеют доступ к обработчику.

## Параметры

| # |  Название   |        Тип         | Описание                                                 |
|:-:|:-----------:|:------------------:|:---------------------------------------------------------|
| 1 |   **ids**   |   `int`\|`array`   | ID-пользователей, которые смогут использовать обработчик |
| 2 | **handler** | `callable`\|`null` | Анонимная функция-обработчик                             |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Аргументы обработчика
- `TGZ $tg` - экземпляр класса TGZ.

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban %w')
    ->func(function(TGZ $tg, $banned_user) {
        $tg->msg("✅ Пользователь `{$banned_user}` забанен")->send();
        
    })
    ->access(123456); // Только пользователь с ID 123456 может использовать команду

$bot->run();
```

## Пример использования с обработчиком

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban %w')
    ->func(function(TGZ $tg, $banned_user) {
        $tg->msg("✅ Пользователь `{$banned_user}` забанен")->send();
        
    })
    ->access(123456, function(TGZ $tg) {
        $tg->reply("Доступ запрещен"); 
        // Отправит сообщение, если попробует использовать пользователь с ID не 123456
    });

$bot->run();
```