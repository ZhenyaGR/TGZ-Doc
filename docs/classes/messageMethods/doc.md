---
title: doc
description: "Добавляет документ."
sidebarDepth: 0
---
# doc
Метод добавляет к сообщению одно или несколько файлов

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

$bot->onBotCommand('/docUrl')->func(function(ZG $tg) {
    $doc_url = "https://example.com/doc.txt";
    $tg->msg("Отправка сообщения с файлом по ссылке")
        ->doc($doc_url)
        ->send();
});

$bot->onBotCommand('/docId')->func(function(ZG $tg) {
    $doc_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg("Отправка сообщения с файлом по ID") 
        ->doc($doc_id)
        ->send();
});

$bot->onBotCommand('/docPath')->func(function(ZG $tg) {
    $doc_path = "media/doc.txt";
    $tg->msg("Отправка сообщения с файлом по локальному пути") 
        ->doc($doc_path)
        ->send();
});

$bot->onBotCommand('/docArray')->func(function(ZG $tg) {
    $doc_url1 = $doc_url2 = "https://example.com/doc.txt";
    $tg->msg('Отправка сообщения с массивом файлов')
        ->doc([$doc_url1, $doc_url2])
        ->send();
});

$bot->onBotCommand('/docLot')->func(function(ZG $tg) {
    $doc_url1 = $doc_url2 = "https://example.com/doc.txt";
    $tg->msg('Отправка сообщения с несколькими вызовами doc()')
        ->doc($doc_url1)
        ->doc($doc_url2)
        ->send();
});

$bot->run();
```
## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла
