---
title: answers
description: "Методы для ответа на callback (answerCallbackQuery) и inline запросы."
sidebarDepth: 0
---

# answers
Методы для быстрой отправки ответов на callback-запросы и inline-запросы

## answerCallbackQuery
Метод отправляет ответ Телеграму на callback-запрос. Поддерживает автоматическое получение ID запроса из контекста.

### Параметры метода
| # |      Название       |          Тип          | Описание                                                                                                                              |
|:-:|:-------------------:|:---------------------:|:--------------------------------------------------------------------------------------------------------------------------------------|
| 1 | **queryIdOrParams** | `string\|array\|null` | **Если строка:** ID callback-запроса.<br>**Если массив:** параметры ответа (например, `['text' => 'ok']`), а ID берется из контекста. |
| 2 |     **params**      |        `array`        | Дополнительные параметры (используется только если первым аргументом передан ID).                                                     |

### Возвращает
`array` - массив с ответом от Telegram

### Примеры использования

**Вариант 1: Автоматический ID (Рекомендуемый)**
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onCallback('click')->func(function(ZG $tg) {
    // ID берется автоматически из входящего обновления
    $tg->answerCallbackQuery(['text' => 'Вы нажали на кнопку', 'show_alert' => true]);
});

$bot->run();
```

**Вариант 2: Явное указание ID**
```php
$bot->onCallback('click')->func(function(ZG $tg) {
    $query_id = $tg->getQueryId();
    $tg->answerCallbackQuery($query_id, ['text' => 'Текст уведомления']);
});
```

**Вариант 3: Пустой вызов**
```php
$bot->onCallback('click')->func(function(ZG $tg) {
    $tg->answerCallbackQuery();
});
```

## answerInlineQuery
Метод отправляет ответ Телеграму на inline-запрос. Поддерживает автоматическое получение ID запроса из контекста.

### Параметры метода
| # |       Название       |       Тип       | Описание                                                                                                                         |
|:-:|:--------------------:|:---------------:|:---------------------------------------------------------------------------------------------------------------------------------|
| 1 | **queryIdOrResults** | `string\|array` | **Если строка:** ID inline-запроса.<br>**Если массив:** массив результатов (`results`), а ID берется из контекста.               |
| 2 | **resultsOrParams**  |     `array`     | **Если 1-й аргумент ID:** массив результатов (`results`).<br>**Если 1-й аргумент результаты:** массив доп. параметров (`extra`). |
| 3 |      **extra**       |     `array`     | Доп. параметры (используется только если первым аргументом передан ID).                                                          |

### Возвращает
`array` - массив с ответом от Telegram

### Примеры использования

**Вариант 1: Автоматический ID (Рекомендуемый)**
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Предполагаем, что у нас есть $results
$bot->onInline()->func(function(ZG $tg) {
    $result = [
        $tg->inline()->title('Пример')->text('Привет!')->create()
    ];

    // Передаем результаты первым аргументом. 
    // ID подставится сам. Вторым аргументом можно передать параметры (например, cache_time)
    $tg->answerInlineQuery($result, ['cache_time' => 300]);
});

$bot->run();
```

**Вариант 2: Явное указание ID**
```php
$bot->onInline()->func(function(ZG $tg) {
    $result = [
        $tg->inline()->title('Пример')->text('Привет!')->create()
    ];
    
    $query_id = $tg->getQueryId();

    $tg->answerInlineQuery(
        $query_id, 
        $result, 
        ['is_personal' => true] // extra params
    );
});
```

**Вариант 3: Только result**
```php
$bot->onInline()->func(function(ZG $tg) {
    $result = [
        $tg->inline()->title('Пример')->text('Привет!')->create(),
    ];

    $tg->answerInlineQuery($result);
});
```

