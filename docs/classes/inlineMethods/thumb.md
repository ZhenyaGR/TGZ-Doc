---
title: thumb
description: "Устанавливает миниатюру."
sidebarDepth: 0
---

# thumb
Метод устанавливает миниатюру для inline-запроса.

## Параметры метода
| # | Название |   Тип    |            Описание             |
|:-:|:--------:|:--------:|:-------------------------------:|
| 1 | **url**  | `string` | Ссылка на изображение миниатюры |

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
    $tg->inline('photo') // Тип inline-запроса `photo`
        ->id('photo')
        ->title('Команда')
        ->description('Описание команды')
        ->fileUrl('https://example.com/image.jpg')      // URL-адрес фото
        ->thumb('https://example.com/image_thumb.jpg')  // URL-адрес миниатюры
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```