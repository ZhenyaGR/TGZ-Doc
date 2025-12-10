---
title: isAnonymous
description: "Настраивает анонимность опроса."
sidebarDepth: 0
---

# isAnonymous
Метод устанавливает анонимность опроса

## Параметры метода
| # | Название |  Тип   |                Описание                 |
|:-:|:--------:|:------:|:---------------------------------------:|
| 1 | **anon** | `bool` | Являются ли опрос анонимным? true/false |

## Возвращает
`Poll` — экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->isAnonymous(true)
    ->send();
```