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


##  Создание экземпляра `Inline` через **TGZ**
Для создания экземпляра класса используется `inline` – метод из класса _TGZ_. Этот метод является «синтаксическим сахаром».

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
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
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Inline;

$tg = TGZ::create('ТОКЕН');
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

