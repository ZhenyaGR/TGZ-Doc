---
title: Message
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
require_once __DIR__ . 'vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    $sticker_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";

    switch ($text) {
           
        case '/sticker':
            $tg->msg() // Телеграм проигнорирует текст
                ->sticker($sticker_id)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/tgzMethods/getFileID.md) - Получить ID файла