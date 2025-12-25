---
title: onState
description: "Создает маршрут для обработки конкретного состояния."
---

# onState
Метод создает маршрут, который срабатывает, когда пользователь находится в указанном состоянии (шаге диалога).
Этот обработчик имеет приоритет над обычными текстовыми командами (`onText`, `onCommand`), что позволяет "захватить" ввод пользователя.

::: tip Поддержка типов
Маршрут `onState` перехватывает как текстовые сообщения, так и нажатия на кнопки (`callback_query`), если пользователь находится в заданном состоянии.

Но он не перехватывает `onBotCommand()`, `onStart()` и `onRefferal()`
:::

## Параметры
| # |   Название    |   Тип    |                   Описание                    |
|:-:|:-------------:|:--------:|:---------------------------------------------:|
| 1 | **stateName** | `string` | Название состояния, которое нужно обработать. |

## Возвращает
`Action` — экземпляр класса `Action`.

## Аргументы
`onState` передает в `func()` объект основного класса `ZG` и данные от пользователя (`текст сообщения` или `callback_data`):

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Storage\FileStorage;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);
$bot->setStorage(new FileStorage());

// 1. Вход в диалог
$bot->onBotCommand('reg', '/reg')->func(function(ZG $tg) {
    $tg->reply('Введите ваше имя:');
    $tg->step('wait_name');
});

// 2. Обработка состояния
$bot->onState('wait_name')
    ->func(function(ZG $tg, string $name) {
        $tg->reply("Приятно познакомиться, $name! Диалог завершен.");
        $tg->endStep(); // Выход
    });

$bot->run();
```
