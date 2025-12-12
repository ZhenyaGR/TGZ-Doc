---
title: parseMode
description: "Устанавливает режим разметки."
sidebarDepth: 0
---

# parseMode
Метод устанавливает режим разметки для сообщения

## Параметры метода
| # |    Название    |        Тип         |                               Возможные значения                                |
|:-:|:--------------:|:------------------:|:-------------------------------------------------------------------------------:|
| 1 | **parse_mode** | `MessageParseMode` | Возможные значения описаны в [MessageParseMode](/classes/enum#messageparsemode) |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/html')->func(function(ZG $tg) {
    $tg->msg("<b>Отправка сообщений с форматированием HTML</b>")
        ->parseMode(MessageParseMode::HTML) // Задаём разметку HTML
        ->send();
    });
            
$bot->onBotCommand('/markdown')->func(function(ZG $tg) {
    $tg->msg("*Отправка сообщений с форматированием Markdown*")
        ->parseMode(MessageParseMode::MarkdownV2) // Задаём разметку MarkdownV2
        ->send();
    });

$bot->run();
```

[Подробнее о разметках на официальной документации Telegram](https://core.telegram.org/bots/api#formatting-options)
