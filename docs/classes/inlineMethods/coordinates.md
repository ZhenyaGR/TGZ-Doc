---
title: coordinates
description: "Устанавливает координаты."
sidebarDepth: 0
---

# coordinates
Метод устанавливает координаты для inline-запроса.

## Параметры метода
| # |   Название    |   Тип   | Описание |
|:-:|:-------------:|:-------:|:--------:|
| 1 | **latitude**  | `float` | Долгота  |
| 2 | **longitude** | `float` |  Широта  |

## Возвращает
`Inline` - экземпляр класса Inline

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('location')
        ->id('location')
        ->title('Местоположение')
        ->coordinates(55.7558, 37.6173)
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```