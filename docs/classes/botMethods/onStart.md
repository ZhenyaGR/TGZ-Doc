---
title: Bot
---

## onStart
Метод `onStart` создает маршрут, который срабатывает при отправке команды `/start`

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

// С помощью отдельного метода
$bot->onStart()
    ->text('Добро пожаловать в бота!');

// Тоже самое, но с помощью onBotCommand()
$bot->onBotCommand('start', '/start')
    ->text('Добро пожаловать в бота!');

$bot->run();
```