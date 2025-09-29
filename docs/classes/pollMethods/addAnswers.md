---
title: Poll
sidebarDepth: 0
---

# addAnswers
Метод добавляет варианты ответов в опрос

## Параметры метода
| # |  Название   |     Тип     |              Описание               |
|:-:|:-----------:|:-----------:|:-----------------------------------:|
| 1 | **answers** | `string`... | Один или несколько вариантов ответа |

## Возвращает
`Poll` — экземпляр класса Poll, содержащий информацию об опросе

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```