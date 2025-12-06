---
title: answers
description: "Методы для ответа на callback (answerCallbackQuery) и inline запросы."
sidebarDepth: 0
---

# answers
Методы для быстрой отправки ответов на callback-запросы и inline-запросы

## answerCallbackQuery
Метод отправляет ответ Телеграму на callback-запрос

### Параметры метода
| # |      Название       |   Тип    |
|:-:|:-------------------:|:--------:|
| 1 | **callbackQueryID** | `string` |
| 2 |     **options**     | `array`  |

### Возвращает
`array` - массив с ответом от Telegram

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'callback_query') {
    $tg->answerCallbackQuery($query_id, ['text' => 'Вы нажали на кнопку']);
}
```

## answerInlineQuery
Метод отправляет ответ Телеграму на inline-запрос

### Параметры метода
| # |     Название      |   Тип    |
|:-:|:-----------------:|:--------:|
| 1 | **inlineQueryID** | `string` |
| 2 |    **result**     | `array`  |

### Возвращает
`array` - массив с ответом от Telegram

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'inline_query') {
    $tg->answerInlineQuery($query_id, $inline_result);
}
```
