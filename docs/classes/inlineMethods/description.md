---
title: Inline
sidebarDepth: 0
---

# description
Метод устанавливает описание для inline-запроса.

## Параметры метода
| # |    Название     |   Тип    |        Описание         |
|:-:|:---------------:|:--------:|:-----------------------:|
| 1 | **description** | `string` | Описание inline-запроса |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('article')
        ->id('article')     
        ->title('Команда')  
        ->description('Описание команды') // Будет отображаться в списке результатов под заголовком
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```