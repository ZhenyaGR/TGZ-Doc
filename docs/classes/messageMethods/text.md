---
title: text
description: "Устанавливает текст сообщения."
sidebarDepth: 0
---

# text
Метод изменяет/задаёт текст для сообщения

## Параметры метода
| # | Название |   Тип    |
|:-:|:--------:|:--------:|
| 1 | **text** | `string` |

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

$bot->onBotCommand('/text')->func(function(ZG $tg) {
    $tg->msg()   // Задаём текст сообщения не при создании сообщения, а в промежуточной функции
        ->text("Текст сообщения")
        ->send();
});

$bot->onBotCommand('/textChange')->func(function(ZG $tg) {
    $send = $tg->msg("Изначальное сообщение"); 
    // Какой-то код...
    $send->text("Изменяем существующий текст")->send();
});

$bot->run();
```