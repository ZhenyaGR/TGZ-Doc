---
title: fileID
description: "Устанавливает file_id файла."
sidebarDepth: 0
---

# fileId
Метод устанавливает id-файла, который отправит бот.

## Параметры метода
| # | Название |   Тип    |    Описание     |
|:-:|:--------:|:--------:|:---------------:|
| 1 |  **id**  | `string` | Текст сообщения |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$query_id = $tg->getQueryId();

$results = [
    $tg->inline('photo') // Тип inline-запроса `photo`
        ->id('photo')
        ->title('Команда')
        ->description('Описание команды')
        ->fileId('id')  // id фото или прочего файла
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```