---
title: title
description: "Устанавливает заголовок."
sidebarDepth: 0
---

# title
Метод устанавливает заголовок для inline-запроса.

## Параметры метода
| # | Название  |   Тип    |         Описание         |
|:-:|:---------:|:--------:|:------------------------:|
| 1 | **title** | `string` | Заголовок inline-запроса |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\ZenithGram\ZG;

$tg = ZG::create('ТОКЕН');
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('article')
        ->id('article')     
        ->title('Команда')  // Будет отображаться в списке результатов
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```