---
title: forceReply
description: "Открывает интерфейс ответа."
sidebarDepth: 0
---

# forceReply
Метод принудительно открывает интерфейс ответа на конкретное сообщение

## Параметры метода
| # |    Название     |   Тип    |                                                     Описание                                                     |
|:-:|:---------------:|:--------:|:----------------------------------------------------------------------------------------------------------------:|
| 1 | **placeholder** | `string` | Текст-подсказка, который будет отображаться в поле ввода.  <br> `Ограничение`: 64 символа <br>`По умолчанию`: "" | 
| 2 |  **selective**  |  `bool`  | `false` - Открывать поле ввода всем. <br> `true` - открывать поле ввода одному  <br>      `По умолчанию`: false  | 

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php    
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/rename')
    ->text("Введите новое имя")
    ->forceReply(placeholder: "Например: Иван");
    
$bot->run();
```
