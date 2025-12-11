---
title: getFilePath
description: "Возвращает прямую ссылку на файл (для скачивания)."
sidebarDepth: 0
---

# getFilePath
Возвращает ссылку на файл на серверах Telegram.

::: danger Опасный метод
Метод возвращает полную ссылку, которая содержит в себе токен бота. 

Результат метода нельзя показывать всем пользователям вашего бота.
:::

## Возвращает
`string` - ссылка на файл.

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create('ТОКЕН_БОТА');

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$url = $tg->file($img_id)->getFilePath();

$tg->msg("Ссылка на файл: $url")->send();
```