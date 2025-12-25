---
title: setStorage
description: "Подключает хранилище к боту."
---

# setStorage
Метод подключает хранилище состояний (FSM) к боту. Это обязательный шаг для использования функционала диалогов (`onState`). Метод также автоматически прокидывает хранилище в основной класс `ZG`.

## Параметры
| # |  Название   |        Тип         |                    Описание                     |
|:-:|:-----------:|:------------------:|:-----------------------------------------------:|
| 1 | **storage** | `StorageInterface` | Реализация хранилища (например, `FileStorage`). |

## Возвращает
`Bot` — экземпляр класса `Bot`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Storage\FileStorage;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

// Инициализируем хранилище
$bot->setStorage(new FileStorage());
```
