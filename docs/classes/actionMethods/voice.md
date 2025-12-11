---
title: voice
description: "Отправляет голосовое сообщение."
---

# voice
Метод отправляет голосовое сообщение

## Параметры

| # | Название  |   Тип    | Описание                  |
|:-:|:---------:|:--------:|:--------------------------|
| 1 | **voice** | `string` | Ссылка (ID) на аудио-файл |

## Возвращает

`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`,`func` и т.д.).

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onText('voice')
    ->voice('voice.mp3'); // Ссылка на локальный файл

$bot->run();
```