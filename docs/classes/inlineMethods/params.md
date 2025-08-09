---
title: Inline
sidebarDepth: 0
---

## params
Метод задаёт дополнительные параметры к inline-запросу.

### Параметры метода
| # |  Название  |   Тип   |
|:-:|:----------:|:-------:|
| 1 | **params** | `array` |

### Возвращает
`Inline` - экземпляр класса Inline

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
        ->params(['url' => 'https://example.com'])
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```