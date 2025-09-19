---
title: Poll
sidebarDepth: 0
---

# closeDate
Метод устанавливает дату в формате Unix-timestamp, когда опрос закроется

## Параметры метода
| # |   Название    |  Тип  |           Описание            |
|:-:|:-------------:|:-----:|:-----------------------------:|
| 1 | **timestamp** | `int` | Дата в формате Unix-timestamp |

## Возвращает
`Poll` — экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->closeDate(time() + 120) // Дата, когда опрос закроется
    ->send();
```