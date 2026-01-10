---
title: file
description: "Создает экземпляр класса File для работы с файлами (скачивание, инфо)."
sidebarDepth: 0
---

# file
Метод создает объект класса `File` для работы с файлами

## Параметры метода
| # |  Название   |   Тип    | Описание |
|:-:|:-----------:|:--------:|:--------:|
| 1 | **file_id** | `string` | ID файла |

## Возвращает
`File` - экземпляр класса File

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$tg->file($img_id)->save('downloads/img.jpg');
```

### Подробнее про класс File [здесь](/classes/file.md)
