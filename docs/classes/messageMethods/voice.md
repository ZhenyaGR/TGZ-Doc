---
title: voice
description: "Добавляет голосовое сообщение."
sidebarDepth: 0
---

# voice
Метод отправляет голосовое сообщение

## Параметры метода
| # | Название |       Тип        |                   Описание                   |
|:-:|:--------:|:----------------:|:--------------------------------------------:|
| 1 | **url**  |     `string`     | Принимает ссылку, локальный путь и ID файла |

## Возвращает
`Message`|`Action` - экземпляр класса Message или Action, содержащий информацию о сообщении

::: tip Контекст вызова
Этот метод реализован через общий трейт и возвращает текущий экземпляр объекта.</br>
Тип возвращаемого значения зависит от того, какой класс вы используете в данный момент:
*   При вызове у экземпляра **Message** вернется объект `Message`.
*   При вызове у экземпляра **Action** вернется объект `Action`.
    :::

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/voiceUrl')->func(function(ZG $tg) {
    $voice_url = "https://example.com/voice.mp3";
    $tg->msg() // Телеграм проигнорирует текст
        ->voice($voice_url)
        ->send();
});

$bot->onBotCommand('/voiceId')->func(function(ZG $tg) {
    $voice_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg() 
        ->voice($voice_id)
        ->send();
});

$bot->onBotCommand('/voicePath')->func(function(ZG $tg) {
    $voice_path = "media/voice.mp3";
    $tg->msg() 
        ->voice($voice_path)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла