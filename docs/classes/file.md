---
title: File
---

## Класс `File`
Класс `File` позволяет работать с файлами в Telegram. 

### Подключение и инициализация
Класс создается с помощью метода `file` в классе `TGZ`

```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$FILE = $tg->file($img_id);
```

## Методы класса

### save
Позволяет скачать файл с сервера Telegram.

::: warning Ограничение Telegram
Позволяет скачивать файлы размером до 20 МБ
:::

| # | Название |   Тип    | Описание                                 |
|:-:|:--------:|:--------:|:-----------------------------------------|
| 1 | **path** | `string` | Путь и имя файла, куда он будет сохранён |

**Возвращает**: 
Путь к сохранённому файлу

**Пример использования**
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$path = $tg->file($img_id)->save('downloads/img.jpg');

$tg->msg("Файл сохранён по пути: $path")->send();
```

### getFileSize
Возвращает размер файла в байтах

**Пример использования**
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$size = $tg->file($img_id)->getFileSize();

$tg->msg("Размер файла: $size байт")->send();
```