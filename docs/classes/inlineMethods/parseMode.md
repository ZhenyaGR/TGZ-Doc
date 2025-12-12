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
`Inline` - экземпляр класса Inline

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create('ТОКЕН_БОТА');

$results = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('*text*')
        ->parseMode(MessageParseMode::MarkdownV2) // Задаём разметку MarkdownV2
        ->create(),
];

$tg->answerInlineQuery($tg->getQueryId(), $results);
```

[Подробнее о разметках на официальной документации Telegram](https://core.telegram.org/bots/api#formatting-options)