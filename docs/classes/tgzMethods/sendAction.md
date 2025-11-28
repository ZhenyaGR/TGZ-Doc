---
title: TGZ
---

# sendAction
Метод устанавливает действие, которое бот отображает в чате. Помогает пользователю увидеть, что бот работает, а не остановился.

## Параметры метода
| # |  Название  |   Тип    |                                                                                                   Описание                                                                                                   |
|:-:|:----------:|:--------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1 | **action** | `string` | Принимает значения: `typing`, `upload_photo`, `upload_video`, `record_video`, `record_voice`, `upload_voice`, `upload_document`, `choose_sticker`, `find_location`, `record_video_note`, `upload_video_note` |

## Возвращает
`TGZ` - экземпляр класса TGZ

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    switch ($text) {

        case '/action':
            $tg->sendAction(); // По умолчанию typing
            $tg->msg('Отображение действий бота с помощью sendChatAction')
                ->send();
            break;

        case '/img':
            $tg->sendAction('upload_photo')  // Отправка фото
                ->msg('Отправка изображения вместе с sendChatAction')
                ->img('https://example.com/img.jpg')
                ->send();
                // Благодаря цепочке методов, можно одновременно
                // создать сообщение и отправить действие
            break;
    }
}
```

## Пример вывода
typing
![Пример 'typing'](/messageAction.png)
upload_photo
![Пример 'upload_photo'](/messageAction2.png)
