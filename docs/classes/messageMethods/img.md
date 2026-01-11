---
title: img
description: "Добавляет изображение (или альбом)."
sidebarDepth: 0
---

# img
Метод добавляет к сообщению одно или несколько изображений

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

$bot->onBotCommand('/imgUrl')->func(function(ZG $tg) {
    $img_url = "https://example.com/img.jpg";
    $tg->msg("Отправка сообщения с фото по ссылке")
        ->img($img_url)
        ->send();
});

$bot->onBotCommand('/imgId')->func(function(ZG $tg) {
    $img_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg("Отправка сообщения с фото по ID") 
        ->img($img_id)
        ->send();
});

$bot->onBotCommand('/imgPath')->func(function(ZG $tg) {
    $img_path = "media/img.jpg";
    $tg->msg("Отправка сообщения с фото по локальному пути") 
        ->img($img_path)
        ->send();
});

$bot->onBotCommand('/imgArray')->func(function(ZG $tg) {
    $img_url1 = $img_url2 = "https://example.com/img.jpg";
    $tg->msg('Отправка сообщения с массивом фотографий')
        ->img([$img_url1, $img_url2])
        ->send();
});

$bot->onBotCommand('/imgLot')->func(function(ZG $tg) {
    $img_url1 = $img_url2 = "https://example.com/img.jpg";
    $tg->msg('Отправка сообщения с несколькими вызовами img()')
        ->img($img_url1)
        ->img($img_url2)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла
