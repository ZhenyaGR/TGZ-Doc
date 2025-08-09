---
title: Inline
sidebarDepth: 0
---

## kbd
Метод `kbd` добавляет inline-клавиатуру к сообщению.

### Параметры метода
| # |  Название   |   Тип   |              Описание              |
|:-:|:-----------:|:-------:|:----------------------------------:|
| 1 | **buttons** | `array` | Массив из callback- или url-кнопок |

### Возвращает
`Inline` - экземпляр класса `Inline`.

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
$tg->initQuery($query_id);

$buttons = [
    [$tg->buttonCallback('Текст кнопки', 'callback_data')],
    [$tg->buttonUrl('Текст кнопки', 'https://example.com')],
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