---
title: TGZ
sidebarDepth: 0
---

# reply
Метод отправляет сообщение в чат в коротком формате;

## Параметры метода
| # |  Название   |       Тип       |      Описание       |
|:-:|:-----------:|:---------------:|:-------------------:|
| 1 | **message** |    `string`     |   Текст сообщения   |
| 2 | **params**  | `array`\|`null` | Параметры сообщения |

## Возвращает
`array` - Массив с ответом от Telegram.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$type = $tg->getType();

if ($type === 'text' || $type === 'bot_command')
    $tg->reply('Привет!');
}
```