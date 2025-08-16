---
title: Bot
---

## onSticker
Метод `onSticker` устанавливает обработчик для стикеров.

### Параметры
Метод не принимает параметров.

### Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на любой пришедший стикер
$bot->onSticker()
    ->text("Это стикер!");

$bot->run();
```