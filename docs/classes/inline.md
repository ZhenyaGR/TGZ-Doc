---
title: Inline
sidebarDepth: 0
---

# **Inline**

## Создание экземпляра `Inline`
Для создания экземпляра класса используется `inline` – метод из класса _TGZ_. Этот метод является «синтаксическим сахаром»

### Параметры метода
| # | Название |       Тип        | Описание                                                                                                               |
|:-:|:--------:|:----------------:|------------------------------------------------------------------------------------------------------------------------|
| 1 | **type** | `string`\|`null` | Тип inline-запроса: `article`, `photo`, `gif`, `mpeg4_gif`, `video`, `audio`, `voice`, `document`, `location`, `venue` |

### Возвращает
`Inline` - экземпляр класса `Inline`.

### Пример использования
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
        ->text('text')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```

