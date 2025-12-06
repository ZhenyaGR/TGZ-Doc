---
title: explanation
description: "Добавляет пояснение к викторине."
sidebarDepth: 0
---

# explanation
Метод устанавливает объяснение (Только для опросов типа `quiz`)

## Параметры метода
| # |    Название     |   Тип    |       Описание        |
|:-:|:---------------:|:--------:|:---------------------:|
| 1 | **explanation** | `string` | Объяснение для опроса |

## Возвращает
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('quiz')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->correctAnswer(1)
    ->explanation('Объяснение')
    ->send();
```