---
title: Bot
---

## onReferral
Метод `onReferral` создает маршрут, который срабатывает при использовании реферальных ссылок.

::: tip Формат реферальной ссылки
https://t.me/{bot_username}?start={referral_data}
:::

### Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

### Аргументы обработчика
- `string $ref` - данные из реферальной ссылки

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onReferral()
    ->func(function(TGZ $tg, string $ref) {
        $tg->reply("Реферальная ссылка: {$ref}"); 
    });

$bot->run();
```