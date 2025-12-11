---
title: getFileId
description: "Получает file_id из сообщения."
sidebarDepth: 0
---

# getFileId
Статический метод для получения ID файла либо из пришедшего сообщения, либо из исходящего сообщения.

## Параметры метода
| # |  Название   |       Тип        | Описание                                                                     |
|:-:|:-----------:|:----------------:|:-----------------------------------------------------------------------------|
| 1 | **context** |     `array`      | Массив контекста. Это либо `update`, либо `result`                           |
| 2 |  **type**   | `string`\|`null` | Тип файла, ID которого нужно вернуть. Если не указан, то метод сам определит |

## Возвращает
`string` - ID файла.

## Примеры использования

### Получение ID из `result`
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\File;

$tg = ZG::create('ТОКЕН_БОТА');

$result = $tg->msg("Вот вам картинка")
    ->img('https://example.com/img.jpg')
    ->send();

$file_id = File::getFileId($result, 'photo');

$tg->msg("ID картинки: $file_id")->send();
```

### Получение ID из `update`
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\File;

$tg = ZG::create('ТОКЕН_БОТА');

$update = $tg->getUpdate();

$file_id = File::getFileId($update);

$tg->msg("ID вашего файла: $file_id")->send();
```



