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

    $img_url = "https://example.com/img.jpg";
    $img_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $img_path = "media/img.jpg";
    
    switch ($text) {
        case '/imgUrl':
            $tg->msg("Отправка сообщения с фото по ссылке")
                ->img($img_url)
                ->send();
            break;
           
        case '/imgId':
            $tg->msg("Отправка сообщения с фото по ID") 
                ->img($img_id)
                ->send();
            break;
           
        case '/imgPath':
            $tg->msg("Отправка сообщения с фото по локальному пути") 
                ->img($img_path)
                ->send();
            break;

        case '/imgArray':
            $tg->msg('Отправка сообщения с массивом фотографий')
                ->img([$img_url1, $img_url2])
                ->send();
            break;

        case '/imgLot':
            $tg->msg('Отправка сообщения с несколькими вызовами img()')
                ->img($img_url1)
                ->img($img_url2)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/tgzMethods/getFileID.md) - Получить ID файла