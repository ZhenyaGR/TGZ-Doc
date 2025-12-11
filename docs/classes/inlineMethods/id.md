---
title: id
description: "Устанавливает ID результата."
sidebarDepth: 0
---

# id
Метод задаёт уникальный идентификатор для inline-запроса.

## Параметры метода
| # | Название |       Тип        | Описание |
|:-:|:--------:|:----------------:|:--------:|
| 1 | **id** | `string` | Уникальный идентификатор |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create('ТОКЕН_БОТА');
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('article')
        ->id('article')     // Должен быть уникальным для каждого inline-запроса
        ->title('Команда')
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```