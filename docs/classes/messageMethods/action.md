---
title: Message
sidebarDepth: 0
---

## action
Метод устанавливает действие, которое бот отображает в телеграм
### Параметры метода
| # |  Название  |   Тип    |                                                                                                   Описание                                                                                                   |
|:-:|:----------:|:--------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1 | **action** | `string` | Принимает значения: `typing`, `upload_photo`, `upload_video`, `record_video`, `record_voice`, `upload_voice`, `upload_document`, `choose_sticker`, `find_location`, `record_video_note`, `upload_video_note` |
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

    switch ($text) {

        case '/action':
            $send = $tg->msg('Отображение действий бота с помощью sendChatAction')
                ->action('typing');
                // Пока бот не отправит сообщение, будет отображаться "Печатает..."
            sleep(3);
            $send->send();
            break;
    }
}
```

![Пример 'typing'](/messageAction.png)