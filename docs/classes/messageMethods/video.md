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
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    $video_url = "https://example.com/video.mp4";
    $video_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $video_path = "media/video.mp4";

    switch ($text) {
        case '/videoUrl':
            $tg->msg("Отправка сообщения с видео по ссылке")
                ->video($video_url)
                ->send();
            break;
           
        case '/videoId':
            $tg->msg("Отправка сообщения с видео по ID") 
                ->video($video_id)
                ->send();
            break;
           
        case '/videoPath':
            $tg->msg("Отправка сообщения с видео по локальному пути") 
                ->video($video_path)
                ->send();
            break;

        case '/videoArray':
            $tg->msg('Отправка сообщения с массивом видео-файлов')
                ->video([$video_url1, $video_url2])
                ->send();
            break;

        case '/videoLot':
            $tg->msg('Отправка сообщения с несколькими вызовами video()')
                ->video($video_url1)
                ->video($video_url2)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/zenithMethods/getFileID.md) - Получить ID файла