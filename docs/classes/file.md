---
title: File
description: "Класс для работы с файлами."
---

# **File**
Класс `File` предназначен для работы с файлами в Telegram. 

Конструктор класса принимает ID файла.

## Параметры конструктора
| # |  Название   |       Тип       | Описание                                   |
|:-:|:-----------:|:---------------:|--------------------------------------------|
| 1 | **file_id** |    `string`     | ID файла, над которым будет работать класс |

##  Создание экземпляра `File` через **ZG**
Для создания экземпляра класса используется `file` – метод из класса _ZG_. Этот метод является «синтаксическим сахаром»

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$File = $tg->file($img_id);
```

##  Создание экземпляра `File` через `new`
Для создания экземпляра класса потребуется его импорт и стандартный синтаксис:

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\File;

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$File = new File($img_id);
```

Оба примера равнозначны

