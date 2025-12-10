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
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    $audio_url = "https://example.com/audio.mp3";
    $audio_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $audio_path = "media/audio.mp3";
    
    switch ($text) {
        case '/audioUrl':
            $tg->msg("Отправка сообщения с аудио по ссылке")
                ->audio($audio_url)
                ->send();
            break;
           
        case '/audioId':
            $tg->msg("Отправка сообщения с аудио по ID") 
                ->audio($audio_id)
                ->send();
            break;
           
        case '/audioPath':
            $tg->msg("Отправка сообщения с аудио по локальному пути") 
                ->audio($audio_path)
                ->send();
            break;

        case '/audioArray':
            $tg->msg('Отправка сообщения с массивом аудио-файлов')
                ->audio([$audio_url1, $audio_url2])
                ->send();
            break;

        case '/audioLot':
            $tg->msg('Отправка сообщения с несколькими вызовами audio()')
                ->audio($audio_url1)
                ->audio($audio_url2)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/zenithMethods/getFileID.md) - Получить ID файла