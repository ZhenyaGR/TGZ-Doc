---
title: Inline
sidebarDepth: 0
---

# mimeType
Метод устанавливает тип ссылки на файл, который отправит бот.

## Параметры метода
| # | Название |   Тип    |                                  Описание                                  |
|:-:|:--------:|:--------:|:--------------------------------------------------------------------------:|
| 1 | **mime** | `string` | Тип ссылки: `text/html`, `video/mp4`, `application/pdf`, `application/zip` |

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
    $tg->inline('video') // Тип inline-запроса `video`
        ->id('video')
        ->title('Команда')
        ->description('Описание команды')
        ->fileUrl('https://example.com/video.mp4')
        ->mimeType('video/mp4') // Ссылка напрямую на видео
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```