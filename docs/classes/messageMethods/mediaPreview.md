---
title: Message
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
require_once __DIR__ . 'vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$text = $tg->getText()
$type = $tg->getType();

$img_url = "https://example.com/img.jpg";

if ($text === '/mediaPreview') {
    $tg->msg("Текст сообщения")
        ->mediaPreview($img_url) // Поддерживает только ссылки
        ->send();
}

```

## Пример, как будет выглядеть сообщение
![Пример 'mediaPreview'](/mediaPreview.png)