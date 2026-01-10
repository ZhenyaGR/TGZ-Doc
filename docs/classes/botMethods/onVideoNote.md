---
title: onVideoNote
description: "Срабатывает при получении видео-сообщения ('кружочка')."
---

# onVideoNote
Метод устанавливает обработчик для видео-сообщений.

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

// Отреагирует на любое пришедшее видео-сообщение
$bot->onVideoNote()
    ->text("Это видео-сообщение!");

$bot->run();
```