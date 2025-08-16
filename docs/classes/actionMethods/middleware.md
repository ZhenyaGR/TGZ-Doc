---
title: Action
---

## middleware
Метод `middleware` регистрирует единый обработчик, который будет выполняться перед выполнением маршрута (onCommand, onText и т.д.)

### Параметры
| # |  Название   |    Тип     | Описание                     |
|:-:|:-----------:|:----------:|:-----------------------------|
| 1 | **handler** | `callable` | Анонимная функция-обработчик |

### Аргументы обработчика
- `TGZ $tg` - экземпляр класса TGZ.
- `callable $next` - ссылка на следующий обработчик в цепочке.

::: tip $next(TGZ $tg)
В next() передается экземпляр класса TGZ.
:::

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onCommand('ban', '/ban %w')
    ->func(function(TGZ $tg, $arg1) {
        $tg->msg("✅ Пользователь `{$arg1}` забанен")->send();
        
    })
    ->middleware(function(TGZ $tg, callable $next) {
        $user_id = $tg->getUserID();
        if ($user_id === 123456) {
            $next($tg); // !!! Важно передать TGZ в $next()        
        } else {
            $tg->reply("Доступ запрещен.");
        }
    });

$bot->run();
```