---
title: audio
description: "Добавляет аудио."
sidebarDepth: 0
---

# audio
Метод добавляет к сообщению одно или несколько аудио-файлов

## Параметры метода
| # | Название |        Тип        |                   Описание                   |
|:-:|:--------:|:-----------------:|:--------------------------------------------:|
| 1 | **url**  | `string`\|`array` | Принимает ссылку, локальный путь и ID файла |

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

$bot->onBotCommand('/audioUrl')->func(function(ZG $tg) {
    $audio_url = "https://example.com/audio.mp3";
    $tg->msg("Отправка сообщения с аудио по ссылке")
        ->audio($audio_url)
        ->send();
});

$bot->onBotCommand('/audioId')->func(function(ZG $tg) {
    $audio_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg("Отправка сообщения с аудио по ID") 
        ->audio($audio_id)
        ->send();
});

$bot->onBotCommand('/audioPath')->func(function(ZG $tg) {
    $audio_path = "media/audio.mp3";
    $tg->msg("Отправка сообщения с аудио по локальному пути") 
        ->audio($audio_path)
        ->send();
});

$bot->onBotCommand('/audioPath')->func(function(ZG $tg) {
    $audio_path = "media/audio.mp3";
    $tg->msg("Отправка сообщения с аудио по локальному пути") 
        ->audio($audio_path)
        ->send();
});

$bot->onBotCommand('/audioArray')->func(function(ZG $tg) {
    $audio_url1 = $audio_url2 = "https://example.com/audio.mp3";
    $tg->msg('Отправка сообщения с массивом аудио-файлов')
        ->audio([$audio_url1, $audio_url2])
        ->send();
});

$bot->onBotCommand('/audioLot')->func(function(ZG $tg) {
    $audio_url1 = $audio_url2 = "https://example.com/audio.mp3";
    $tg->msg('Отправка сообщения с несколькими вызовами audio()')
        ->audio($audio_url1)
        ->audio($audio_url2)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла