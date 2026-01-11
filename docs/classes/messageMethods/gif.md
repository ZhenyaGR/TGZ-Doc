---
title: gif
description: "Добавляет GIF."
sidebarDepth: 0
---

# gif
Метод добавляет к сообщению одно или несколько гиф-файлов

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

$bot->onBotCommand('/gifUrl')->func(function(ZG $tg) {
    $gif_url = "https://example.com/gif.gif";
    $tg->msg("Отправка сообщения с гиф по ссылке")
        ->gif($gif_url)
        ->send();
});

$bot->onBotCommand('/gifId')->func(function(ZG $tg) {
    $gif_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $tg->msg("Отправка сообщения с гиф по ID") 
        ->gif($gif_id)
        ->send();
});

$bot->onBotCommand('/gifPath')->func(function(ZG $tg) {
    $gif_path = "media/gif.gif";
    $tg->msg("Отправка сообщения с гиф по локальному пути") 
        ->gif($gif_path)
        ->send();
});

$bot->onBotCommand('/gifArray')->func(function(ZG $tg) {
    $gif_url1 = $gif_url2 = "https://example.com/gif.gif";
    $tg->msg('Отправка сообщения с массивом гифок')
        ->gif([$gif_url1, $gif_url2])
        ->send();
});

$bot->onBotCommand('/gifLot')->func(function(ZG $tg) {
    $gif_url1 = $gif_url2 = "https://example.com/gif.gif";
    $tg->msg('Отправка сообщения с несколькими вызовами gif()')
        ->gif($gif_url1)
        ->gif($gif_url2)
        ->send();
});

$bot->run();
```

## Вспомогательные методы
- [`getFileId`](/classes/fileMethods/getFileId.md) - Получить ID файла