---
title: middleware
description: "Регистрирует глобальное Middleware для бота."
---

# Bot::middleware
Метод регистрирует единый обработчик, который будет выполняться перед тем, как библиотека начнет искать подходящий маршрут (onCommand, onText и т.д.). Это основная точка входа для реализации сквозной логики, такой как аутентификация, логирование, предварительная обработка данных или проверка прав доступа.

:::tip Bot::middleware
Метод принадлежит классу Bot и никак не связан с одноименным методом класса Action.
:::

## Параметры
| # |  Название   |    Тип     | Описание                     |
|:-:|:-----------:|:----------:|:-----------------------------|
| 1 | **handler** | `callable` | Анонимная функция-обработчик |

## Аргументы обработчика
- `ZG $tg` - экземпляр класса ZG.
- `callable $next` - ссылка на следующий обработчик в цепочке.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->middleware(function(ZG $tg, callable $next) {
    $user_id = $tg->getUserId();
    if ($user_id === 123456) {
        $next();        
    } else {
        $tg->reply("Доступ запрещен.");
    }
    // Код начнёт искать маршруты, если у пользователя ID 123456, иначе - нет
});

$bot->onBotCommand('main_menu', '/menu')
    ->text('Вы находитесь в главном меню.');

$bot->run();
```