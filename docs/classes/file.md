---
title: File
---

# **File**
Класс `File` предназначен для работы с файлами в Telegram. 

## Создание экземпляра `File`
Для создания экземпляра класса используется `file` – метод из класса _TGZ_. Этот метод является «синтаксическим сахаром»

```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$File = $tg->file($img_id);
```

## Методы класса

### save
Метод позволяет скачать файл с сервера Telegram.

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