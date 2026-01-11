---
title: video
description: "Добавляет видео (или альбом)."
sidebarDepth: 0
---

# video
Метод добавляет к сообщению одно или несколько видео-файлов

## Параметры метода
| # | Название |        Тип        |                   Описание                   |
|:-:|:--------:|:-----------------:|:--------------------------------------------:|
| 1 | **url**  | `string`\|`array` | Принимает ссылку, локальный путь и ID файла |

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

$bot->onBotCommand('/videoUrl')->func(function(ZG $tg) {
    $video_url = "https://example.com/video.mp4";
    $tg->msg("Отправка сообщения с видео по ссылке")
        ->video($video_url)
        ->send();
});

$bot->onBotCommand('/videoId')->func(function(ZG $tg) {
    $video_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg("Отправка сообщения с видео по ID") 
        ->video($video_id)
        ->send();
});

$bot->onBotCommand('/videoPath')->func(function(ZG $tg) {
    $video_path = "media/video.mp4";
    $tg->msg("Отправка сообщения с видео по локальному пути") 
        ->video($video_path)
        ->send();
});

$bot->onBotCommand('/videoArray')->func(function(ZG $tg) {
    $video_url1 = $video_url2 = "https://example.com/video.mp4";
    $tg->msg('Отправка сообщения с массивом видео-файлов')
        ->video([$video_url1, $video_url2])
        ->send();
});

$bot->onBotCommand('/videoLot')->func(function(ZG $tg) {
    $video_url1 = $video_url2 = "https://example.com/video.mp4";
    $tg->msg('Отправка сообщения с несколькими вызовами video()')
        ->video($video_url1)
        ->video($video_url2)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла