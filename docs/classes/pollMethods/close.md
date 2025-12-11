---
title: close
description: "Отправляет опрос закрытым."
sidebarDepth: 0
---

# close
Метод отправляет закрытый опрос (Используется для тестов)

## Параметры метода
| # | Название |  Тип   |          Описание           |
|:-:|:--------:|:------:|:---------------------------:|
| 1 | **close** | `bool` | Закрыт ли опрос? true/false |

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
    ->close(true)
    ->send();
```