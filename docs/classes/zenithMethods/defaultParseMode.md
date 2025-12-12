---
title: defaultParseMode
description: "Устанавливает режим разметки по умолчанию для всех сообщений."
sidebarDepth: 0
---

# defaultParseMode
Метод устанавливает режим разметки для каждого сообщения по умолчанию

## Параметры метода
| # |    Название    |        Тип         |                               Возможные значения                                |
|:-:|:--------------:|:------------------:|:-------------------------------------------------------------------------------:|
| 1 | **parse_mode** | `MessageParseMode` | Возможные значения описаны в [MessageParseMode](/classes/enum#messageparsemode) |

## Возвращает
`TGZ` - экземпляр класса TGZ

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create('ТОКЕН_БОТА');
$tg->defaultParseMode(MessageParseMode::MarkdownV2);

$tg->msg('*Привет!*')->send();
// Текст будет автоматически преобразован в MarkdownV2
```

[Подробнее о разметках на официальной документации Telegram](https://core.telegram.org/bots/api#formatting-options)