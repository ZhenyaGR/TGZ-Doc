---
title: parseMode
description: "Устанавливает разметку для объяснений."
sidebarDepth: 0
---

# parseMode-методы
Три метода для установки режима разметки, но в разных сценариях 

## Параметры методов
| # |    Название    |        Тип         |                               Возможные значения                                |
|:-:|:--------------:|:------------------:|:-------------------------------------------------------------------------------:|
| 1 | **parse_mode** | `MessageParseMode` | Возможные значения описаны в [MessageParseMode](/classes/enum#messageparsemode) |

## Возвращают
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

## parseMode
Метод устанавливает режим разметки для вопроса и объяснения

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Enums\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->parseMode(MessageParseMode::MarkdownV2) // Задаём разметку MarkdownV2
    ->send();
```

## questionParseMode
Метод устанавливает режим разметки для вопроса

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Enums\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->questionParseMode(MessageParseMode::MarkdownV2) // Задаём разметку MarkdownV2
    ->send();
```

## explanationParseMode
Метод устанавливает режим разметки для объяснения (Только для опросов типа `quiz`)

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Enums\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('quiz')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->correctAnswer(1)
    ->explanation('Объяснение')
    ->explanationParseMode(MessageParseMode::MarkdownV2) // Задаём разметку MarkdownV2
    ->send();
```

[Подробнее о разметках на официальной документации Telegram](https://core.telegram.org/bots/api#formatting-options)