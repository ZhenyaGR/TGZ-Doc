---
title: params
description: "Устанавливает дополнительные параметры."
sidebarDepth: 0
---

# params
Метод задаёт дополнительные параметры сообщения. Например: `disable_notification` - отключение звука уведомления

## Параметры метода
| # |  Название  |   Тип   |                                             Описание                                              |
|:-:|:----------:|:-------:|:-------------------------------------------------------------------------------------------------:|
| 1 | **params** | `array` | Дополнительные параметры для сообщения, которые нельзя добавить с помощью нативных методов класса |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$text = $tg->getText()
$type = $tg->getType();

if ($type === 'bot_command') {    
    switch ($text) {
        case '/paramsNotification':
            $tg->msg("Сообщение без звука уведомлений")
                ->params(['disable_notification' => true])
                ->send();
            break;
           
        case '/paramsPreview':
            $tg->msg("Сообщение без превью ссылки")
                ->params(['disable_web_page_preview' => true]) 
                ->send();
            break;
    }
}
```