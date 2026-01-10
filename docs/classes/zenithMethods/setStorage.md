---
title: setStorage
description: "Устанавливает хранилище состояний."
sidebarDepth: 0
---

# setStorage
Метод подключает объект хранилища к экземпляру `ZG`. Это необходимо для работы методов `step()`, `session()` и `endStep()`.

::: tip Автоматизация
Если вы используете класс `Bot`, рекомендуется устанавливать хранилище через `Bot->setStorage()`, он автоматически передаст его в `ZG`.
:::

## Параметры метода
| # |  Название   |        Тип         |     Описание      |
|:-:|:-----------:|:------------------:|:-----------------:|
| 1 | **storage** | `StorageInterface` | Объект хранилища. |

## Возвращает
`ZG` - экземпляр класса ZG.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Storage\FileStorage;

$tg = ZG::create(BOT_TOKEN);
$storage = new FileStorage();

$tg->setStorage($storage);
```