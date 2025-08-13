---
title: Action
---

## Класс `Action`
Это вспомогательный класс, используемый для установки действий, которые будут выполнены ботом для конструктора ботов с помощью класса `Bot`.

Этот класс используется внутри `Bot` и не должен использоваться напрямую.

### Пример использования
```php
<?php    
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onBotCommand('start', '/start')
    ->text('Добро пожаловать в нашего бота!'); // Текст ответного сообщения

$bot->run();
```