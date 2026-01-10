---
title: onSticker
description: "Срабатывает при получении стикера."
---

# onSticker
Метод устанавливает обработчик для стикеров.

## Параметры
Метод не принимает параметров.

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Отреагирует на любой пришедший стикер
$bot->onSticker()
    ->text("Это стикер!");

$bot->run();
```