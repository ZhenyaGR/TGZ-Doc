---
title: multipleAnswers
description: "Разрешает выбор нескольких вариантов."
sidebarDepth: 0
---

# multipleAnswers
Метод устанавливает возможность выбора нескольких вариантов

## Параметры метода
| # |   Название   |  Тип   |                   Описание                    |
|:-:|:------------:|:------:|:---------------------------------------------:|
| 1 | **multiple** | `bool` | Можно выбрать несколько вариантов? true/false |

## Возвращает
`Poll` — экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->multipleAnswers(true)
    ->send();
```