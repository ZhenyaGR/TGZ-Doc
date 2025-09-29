---
title: TGZ
sidebarDepth: 0
---

# inline
Метод создает объект класса Inline для конструктора Inline-запросов

## Параметры метода
| # | Название |   Тип    |                                       Описание                                       |
|:-:|:--------:|:--------:|:------------------------------------------------------------------------------------:|
| 1 | **type** | `string` | Тип Inline-запроса: `article`, `photo`, `gif`, `video`, `audio`, `voice`, `document` |

## Возвращает
`Inline` - экземпляр класса Inline

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$inline_result = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('Текст сообщения')
        ->create(),
];
```
## Подробнее про класс Inline [здесь](/classes/inline.md)

