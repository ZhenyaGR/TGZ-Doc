---
title: Bot
---

# onLeftChatMember
Метод устанавливает обработчик для всех вышедшего/исключенного пользователя.

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

// Отреагирует на вышедшего/исключенного пользователя
$bot->onLeftChatMember()
    ->text("Ну и пока!");

$bot->run();
```

## Пример использования с обработчиком

### Аргументы обработчика
- `TGZ $tg` - экземпляр класса TGZ.
- `UserDto $user` - данные пользователя в формате UserDto.

```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на вышедшего/исключенного пользователя
$bot->onLeftChatMember()
    ->func(function (TGZ $tg, UserDto $user) {
        $tgz->msg("Из чата вышел . " $user->firstName)->send();
    });

$bot->run();
```