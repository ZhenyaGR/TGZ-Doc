---
title: onPhoto
description: "Срабатывает при получении изображения."
---

# onPhoto
Метод устанавливает обработчик для фотографий.

## Параметры
Метод не принимает параметров.

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\ZenithGram\ZG;
use ZhenyaGR\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на любое пришедшее фото
$bot->onPhoto()
    ->text("Это фото!");

$bot->run();
```