---
title: dice
description: "Отправляет анимированный эмодзи-кубик."
sidebarDepth: 0
---

# dice
Метод отправляет анимированный эмодзи

## Параметры метода
| # | Название |      Тип      |                                             Описание                                              |
|:-:|:--------:|:-------------:|:-------------------------------------------------------------------------------------------------:|
| 1 | **dice** | `MessageDice` | Enum для указания типа анимированного эмодзи. подробнее: [MessageDice](/classes/enum#messagedice) |

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
use ZenithGram\ZenithGram\Enums\MessageDice;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/dice')->func(function(ZG $tg) {
    // Получаем все значения
    $cases = MessageDice::cases();
    // Получаем случайный вариант эмодзи
    $dice = $cases[array_rand($cases)];
    
    // Текст сообщения указывать не нужно, Telegram его проигнорирует
    $tg->msg()->dice($dice)->send();
});

$bot->run();
```
