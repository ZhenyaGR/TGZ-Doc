---
title: Message
sidebarDepth: 0
---

## img
Метод добавляет к сообщению одно или несколько картинок
### Параметры метода
| # | Название |        Тип        |                   Описание                   |
|:-:|:--------:|:-----------------:|:--------------------------------------------:|
| 1 | **url**  | `string`\|`array` | Принимает ссылку, локальный путь и ID файла |
### Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении
### Пример использования
```php
<?php
require 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$tg->initText($text)
    ->initType($type);

if ($type === 'bot_command') {

    $img_url = "https://12-kanal.ru/upload/iblock/62a/zb1mq2841smduhwwuv3jwjfv9eooyc50/fotograf3.jpg";
    $img_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $img_path = "img/fotograf.jpg";

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
            $tg->msg('Отправка сообщения с массивов фотографий')
                ->img([$img_url1, $img_url2])
                ->send();
            break;

        case '/imgLot':
            $tg->msg('Отправка сообщения с массивов фотографий')
                ->img($img_url1)
                ->img($img_url2)
                ->send();
            break;
    }
}
```

#### Получить ID файла можно с помощью метода [getFileID](/classes/tgzMethods/getFileID.md)