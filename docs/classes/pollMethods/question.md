---
title: question
description: "Устанавливает вопрос опроса."
sidebarDepth: 0
---

# question
Метод устанавливает вопрос для опроса

## Параметры метода
| # |   Название   |       Тип        |   Описание    |
|:-:|:------------:|:----------------:|:-------------:|
| 1 | **question** | `string`\|`null` | Текст вопроса |

## Возвращает
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```