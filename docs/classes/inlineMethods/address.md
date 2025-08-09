---
title: Inline
sidebarDepth: 0
---

## coordinates
Метод `coordinates` устанавливает координаты для inline-запроса.

### Параметры метода
| # |  Название   |   Тип    |  Описание   |
|:-:|:-----------:|:--------:|:-----------:|
| 1 | **address** | `string` | Любой текст |

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
    $tg->inline('venue')
        ->id('venue')
        ->title('Адрес')
        ->coordinates(55.7558, 37.6173)
        ->address('Улица Пушкина, дом Колотушкина')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```