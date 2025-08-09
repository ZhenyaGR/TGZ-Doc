---
title: Inline
sidebarDepth: 0
---

## inline
Метод `inline` является «синтаксическим сахаром», который используется для создания и экземпляра класса `Inline`. Он предназначен для создания inline-запросов.

### Параметры метода
| # | Название |       Тип        | Описание                                                                                                               |
|:-:|:--------:|:----------------:|------------------------------------------------------------------------------------------------------------------------|
| 1 | **type** | `string`\|`null` | Тип inline-запроса: `article`, `photo`, `gif`, `mpeg4_gif`, `video`, `audio`, `voice`, `document`, `location`, `venue` |

### Возвращает
`Inline` - экземпляр класса `Inline`.

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
$tg->initQuery($query_id);

$results = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```

