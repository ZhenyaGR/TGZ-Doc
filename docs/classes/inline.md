---
title: Inline
description: "Класс для создания инлайн-ответов."
sidebarDepth: 0
---

# **Inline**

Конструктор класса принимает тип inline-запроса или значение `null`.

## Параметры конструктора
| # | Название |       Тип        | Описание                                                                                                               |
|:-:|:--------:|:----------------:|------------------------------------------------------------------------------------------------------------------------|
| 1 | **type** | `string`\|`null` | Тип inline-запроса: `article`, `photo`, `gif`, `mpeg4_gif`, `video`, `audio`, `voice`, `document`, `location`, `venue` |


##  Создание экземпляра `Inline` через **ZG**
Для создания экземпляра класса используется `inline` – метод из класса _ZG_. Этот метод является «синтаксическим сахаром».

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```

##  Создание экземпляра `Inline` через `new`
Для создания экземпляра класса потребуется его импорт и стандартный синтаксис:

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Inline;

$tg = ZG::create(BOT_TOKEN);
$query_id = $tg->getQueryId();

$results = [
    new Inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```

Оба примера равнозначны

