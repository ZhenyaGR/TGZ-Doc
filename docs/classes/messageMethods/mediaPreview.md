---
title: mediaPreview
description: "Добавляет скрытую ссылку для превью."
---

# mediaPreview
Метод `mediaPreview` добавляет к сообщению предпросмотр ссылки, не отображая саму ссылку в тексте.
Это можно использовать для отправки фото без загрузки на сервер Telegram.

## Параметры метода
| # | Название |   Тип    |         Описание         |
|:-:|:--------:|:--------:|:------------------------:|
| 1 | **url**  | `string` | Принимает ссылку на фото |

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

$bot->onBotCommand('/mediaPreview')->func(function(ZG $tg) {
$img_url = "https://example.com/img.jpg";
    $tg->msg("Текст сообщения")
        ->mediaPreview($img_url) // Поддерживает только ссылки
        ->send();
});

$bot->run();
```

## Пример, как будет выглядеть сообщение
![Пример 'mediaPreview'](/mediaPreview.png)