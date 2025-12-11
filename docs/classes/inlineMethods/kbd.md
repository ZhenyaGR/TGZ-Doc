---
title: kbd
description: "Добавляет Inline-клавиатуру к результату."
sidebarDepth: 0
---

# kbd
Метод добавляет inline-клавиатуру к сообщению.

## Параметры метода
| # |  Название   |   Тип   |              Описание              |
|:-:|:-----------:|:-------:|:----------------------------------:|
| 1 | **buttons** | `array` | Массив из callback- или url-кнопок |

## Возвращает
`Inline` - экземпляр класса `Inline`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create('ТОКЕН_БОТА');
$query_id = $tg->getQueryId();

$buttons = [
    [Button::cb('Текст кнопки', 'callback_data')],
    [Button::url('Текст кнопки', 'https://example.com')],
];

$results = [
    $tg->inline('article') 
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('Текст сообщения')
        ->kbd($buttons)
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```