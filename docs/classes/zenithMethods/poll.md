---
title: poll
description: "Создает экземпляр класса Poll для создания опросов."
sidebarDepth: 0
---


# poll
Метод создает объект класса Poll для конструктора опросов

## Параметры метода
| # | Название |   Тип    |           Описание            |
|:-:|:--------:|:--------:|:-----------------------------:|
| 1 | **type** | `string` | Тип опроса: `regular`, `quiz` |

## Возвращает
`Poll` - экземпляр класса Poll

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZenithGram\ZenithGram\ZG;
$tg = ZG::create(BOT_TOKEN);
$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```
## Подробнее про класс Poll [здесь](/classes/poll.md)
