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
`Message` - экземпляр класса Message, содержащий информацию о сообщении

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
