---
title: correctAnswer
description: "Устанавливает правильный ответ (для викторин)."
sidebarDepth: 0
---

# correctAnswer
Метод устанавливает правильный ответ в опросе (Только в режиме `quiz`)

## Параметры метода
| # | Название |  Тип  |       Описание        |
|:-:|:--------:|:-----:|:---------------------:|
| 1 |  **id**  | `int` | ID правильного ответа |

## Возвращает
`Poll` — экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$tg->poll('quiz')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->correctAnswer(1) // ID правильного ответа (Начинается с 0)
    ->send();
```