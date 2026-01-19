---
title: sendAction
description: "Отправляет статус действия бота (например, 'typing')."
---

# sendAction
Метод устанавливает действие, которое бот отображает в чате. Помогает пользователю увидеть, что бот работает, а не остановился.

## Параметры метода
| # |  Название  |     Тип      |                                                 Описание                                                  |
|:-:|:----------:|:------------:|:---------------------------------------------------------------------------------------------------------:|
| 1 | **action** | `ChatAction` | По умолчанию: ChatAction::Typing. Все возможные значения описаны в [ChatAction](/classes/enum#chataction) |

## Возвращает
`ZG` - экземпляр класса ZG

## Пример использования

```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Enums\ChatAction;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('/action')->func(function(ZG $tg) {
    $tg->sendAction(); // Без параметров будет простое "Печатает..."
    $tg->msg('Отображение действий бота с помощью sendChatAction')->send();
});

$bot->onBotCommand('/img')->func(function(ZG $tg) {
    $tg->sendAction(ChatAction::UploadPhoto); // Отправка фото
    $tg->msg('Отправка изображения вместе с sendChatAction')
        ->img('https://example.com/img.jpg')
        ->send();
});

$bot->run();
```

## Пример вывода
typing
![Пример 'typing'](/messageAction.png)
upload_photo
![Пример 'upload_photo'](/messageAction2.png)
