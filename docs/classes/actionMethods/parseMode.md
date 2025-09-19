---
title: Action
---

# parseMode
Метод устанавливает режим разметки для сообщения

## Параметры
| # |   Название    |   Тип    | Описание                                         |
|:-:|:-------------:|:--------:|:-------------------------------------------------|
| 1 | **parseMode** | `string` | Режим разметки: `HTML`, `Markdown`, `MarkdownV2` |

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

$bot->onBotCommand('start', '/start')
    ->text('Привет, <b>Мир!</b>')
    ->parseMode('HTML');

$bot->run();
```