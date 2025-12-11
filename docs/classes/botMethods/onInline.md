---
title: onInline
description: "Обработчик входящих Inline-запросов."
---

# onInline
Метод устанавливает обработчик для всех inline-запросов.

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

$results = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('text')
        ->create(),
];

// Отреагирует на любой пришедший inline-запрос
$bot->onInline()
    ->func(function(ZG $tg) use ($results) {
        $query_id = $tg->getQueryId();
        $tg->answerInlineQuery($query_id, $results);
    });

$bot->run();
```