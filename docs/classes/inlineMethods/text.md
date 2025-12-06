---
title: text
description: "Устанавливает текст сообщения при выборе."
sidebarDepth: 0
---

# text
Метод устанавливает текст сообщения, которое отправит бот.

## Параметры метода
| # | Название |   Тип    |    Описание     |
|:-:|:--------:|:--------:|:---------------:|
| 1 | **text** | `string` | Текст сообщения |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
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
        ->text('text') // Текст сообщения
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```