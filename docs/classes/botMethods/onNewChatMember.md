---
title: Bot
---

# onNewChatMember
Метод устанавливает обработчик для всех зашедших/добавленных пользователей.

## Параметры
Метод не принимает параметров.

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->text("Приветствую в чате!");

$bot->run();
```

## Пример использования с обработчиком

### Аргументы обработчика
- `TGZ $tg` - экземпляр класса TGZ.
- `...array UserDto $users` - пользователи в формате UserDto.

### Если добавлен один пользователь
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Dto\UserDto;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->func(function (TGZ $tg, UserDto $user1) {
        $tg->msg("Приветствую в чате, " . $user1->firstName)->send();
    });

$bot->run();
```

### Если добавлено несколько пользователей
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Dto\UserDto;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->func(function (TGZ $tg, UserDto $user1, UserDto $user2) {
        $tg->msg("Приветствую в чате, " . $user1->firstName . " и $user2->firstName")->send();
    });

$bot->run();
```