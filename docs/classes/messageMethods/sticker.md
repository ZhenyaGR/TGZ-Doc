---
title: sticker
description: "Добавляет стикер."
sidebarDepth: 0
---

# sticker
Метод отправляет стикер

## Параметры метода
| # | Название |       Тип        |      Описание       |
|:-:|:--------:|:----------------:|:-------------------:|
| 1 | **url**  |     `string`     | Принимает ID файла |

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

$bot->onBotCommand('/sticker')->func(function(ZG $tg) {
    $sticker_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg() // Телеграм проигнорирует текст
        ->sticker($sticker_id)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла
