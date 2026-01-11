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

$bot->onBotCommand('/paramsNotification')->func(function(ZG $tg) {
    $tg->msg("Сообщение без звука уведомлений")
        ->params(['disable_notification' => true])
        ->send();
});

$bot->onBotCommand('/paramsPreview')->func(function(ZG $tg) {
    $tg->msg("Сообщение без превью ссылки")
        ->params(['disable_web_page_preview' => true]) 
        ->send();
});

$bot->run();
```