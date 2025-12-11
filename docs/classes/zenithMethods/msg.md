---
title: msg
description: "Создает экземпляр класса Message для отправки сообщений."
sidebarDepth: 0
---



# msg
Метод создает объект класса Message для конструктора сообщений

## Параметры метода
| # | Название |   Тип    |         Описание         |
|:-:|:--------:|:--------:|:------------------------:|
| 1 | **text** | `string` | Текст будущего сообщения |

## Возвращает
`Message` - экземпляр класса Message

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create('ТОКЕН_БОТА');
$tg->msg("Привет")->send();
```
## Подробнее про класс Message [здесь](/classes/message.md)
