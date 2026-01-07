---
title: middleware
description: "Регистрирует Middleware для конкретного маршрута."
---

# middleware
Метод регистрирует единый обработчик, который будет выполняться перед выполнением маршрута (onCommand, onText и т.д.)

## Параметры
| # |  Название   |    Тип     | Описание                     |
|:-:|:-----------:|:----------:|:-----------------------------|
| 1 | **handler** | `callable` | Анонимная функция-обработчик |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

### Аргументы обработчика
- `ZG $tg` - экземпляр класса ZG.
- `callable $next` - ссылка на следующий обработчик в цепочке.

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban {username}')
    ->func(function(ZG $tg, string $username) {
        $tg->msg("✅ Пользователь `{$username}` забанен")->send();
        
    })
    ->middleware(function(ZG $tg, callable $next) {
        $user_id = $tg->getUserId();
        if ($user_id === 123456) {
            $next();     
        } else {
            $tg->reply("Доступ запрещен.");
        }
    });

$bot->run();
```