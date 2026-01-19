---
title: onReferral
description: "Обработчик реферальных ссылок (параметры в /start)."
---

# onReferral
Метод создает маршрут, который срабатывает при использовании реферальных ссылок.

::: tip Формат реферальной ссылки
https://t.me/{bot_username}?start={referral_data}
:::

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Аргументы обработчика
- `string $ref` - данные из реферальной ссылки

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onReferral()
    ->func(function(ZG $tg, string $ref) {
        $tg->msg("Реферальная ссылка: {$ref}")->send(); 
    });

$bot->run();
```