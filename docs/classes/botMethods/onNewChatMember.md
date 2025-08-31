---
title: Bot
---

## onNewChatMember
Метод `onNewChatMember` устанавливает обработчик для всех зашедших/добавленных пользователей.

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

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->text("Приветствую в чате!");

$bot->run();
```

### Пример использования с обработчиком

### Аргументы обработчика
- `TGZ $tg` - экземпляр класса TGZ.
- `...array $users` - массивы пользователей.

#### Если добавлен один пользователь
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->func(function ($tgz, $user) {
        $tgz->msg("Приветствую в чате, {$user['first_name']}")->send();
    });

$bot->run();
```

#### Если добавлено несколько пользователей
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

// Отреагирует на зашедших/добавленных пользователей
$bot->onNewChatMember()
    ->func(function ($tgz, $user1, $user2) {
        $tgz->msg("Приветствую в чате, {$user1['first_name']} и {$user2['first_name']}")->send();
    });

$bot->run();
```