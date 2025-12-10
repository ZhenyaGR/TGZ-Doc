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

    $gif_url = "https://example.com/gif.gif";
    $gif_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $gif_path = "media/gif.gif";

    switch ($text) {
        case '/gifUrl':
            $tg->msg("Отправка сообщения с гиф по ссылке")
                ->gif($gif_url)
                ->send();
            break;
           
        case '/gifId':
            $tg->msg("Отправка сообщения с гиф по ID") 
                ->gif($gif_id)
                ->send();
            break;
           
        case '/gifPath':
            $tg->msg("Отправка сообщения с гиф по локальному пути") 
                ->gif($gif_path)
                ->send();
            break;

        case '/gifArray':
            $tg->msg('Отправка сообщения с массивом гифок')
                ->gif([$gif_url1, $gif_url2])
                ->send();
            break;

        case '/gifLot':
            $tg->msg('Отправка сообщения с несколькими вызовами gif()')
                ->gif($gif_url1)
                ->gif($gif_url2)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/zenithMethods/getFileID.md) - Получить ID файла