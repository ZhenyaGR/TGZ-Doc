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