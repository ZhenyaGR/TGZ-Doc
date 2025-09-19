---
title: Bot
---

# onAudio
Метод устанавливает обработчик для сообщений с аудио.

## Параметры
Метод не принимает параметров.

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на любое пришедшее аудио
$bot->onAudio()
    ->text("Это аудио!");

$bot->run();
```