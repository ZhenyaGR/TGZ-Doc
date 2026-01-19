---
title: onLeftChatMember
description: "Срабатывает при выходе участника из чата."
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
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Отреагирует на вышедшего/исключенного пользователя
$bot->onLeftChatMember()->text("Ну и пока!");

$bot->run();
```

## Пример использования с обработчиком

### Аргументы обработчика
- `ZG $tg` - экземпляр класса `ZG`.
- `UserDto $user` - данные пользователя в формате UserDto.

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Dto\UserDto;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Отреагирует на вышедшего/исключенного пользователя
$bot->onLeftChatMember()
    ->func(function (ZG $tg, UserDto $user) {
        $tg->msg("Из чата вышел " . $user->firstName)->send();
    });

$bot->run();
```