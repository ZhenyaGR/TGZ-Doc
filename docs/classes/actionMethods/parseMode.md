---
title: parseMode
description: "Устанавливает режим разметки для ответа."
---

# parseMode
Метод устанавливает режим разметки для сообщения

## Параметры
| # |   Название    |        Тип         | Описание                                                                        |
|:-:|:-------------:|:------------------:|:--------------------------------------------------------------------------------|
| 1 | **parseMode** | `MessageParseMode` | Возможные значения описаны в [MessageParseMode](/classes/enum#messageparsemode) |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onBotCommand('start', '/start')
    ->text('Привет, <b>Мир!</b>')
    ->parseMode(MessageParseMode::HTML); // Задаём разметку HTML

$bot->run();
```

[Подробнее о разметках на официальной документации Telegram](https://core.telegram.org/bots/api#formatting-options)