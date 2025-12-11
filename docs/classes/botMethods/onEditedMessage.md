---
title: onEditedMessage
description: "Срабатывает при редактировании сообщения пользователем."
---

# onEditedMessage
Метод устанавливает обработчик для редактирования сообщения.

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

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onEditedMessage()
    ->text("Вы изменили сообщение!");

$bot->run();
```