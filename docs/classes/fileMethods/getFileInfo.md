---
title: File
sidebarDepth: 0
---

# getFileInfo
Возвращает массив с информацией о файле после выполнения метода `getFile`.

## Возвращает
`array` - массив с информацией о файле.

## Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$result = $tg->file($img_id)->getFileInfo();

$tg->msg("Все данные о файле: " . json_encode($result))->send();
```
