---
title: File
sidebarDepth: 0
---

# save
Метод позволяет скачать файл с сервера Telegram.

::: warning Ограничение Telegram
Позволяет скачивать файлы размером до 20 МБ
:::

## Параметры метода
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

