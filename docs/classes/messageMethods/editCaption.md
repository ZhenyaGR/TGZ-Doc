---
title: editCaption
description: "Редактирует подпись медиа по ID."
sidebarDepth: 0
---

# editCaption
Метод редактирует описание медиа

::: warning **Важно:**
В случае если в сообщении не было медиа, то метод [editCaption](/classes/messageMethods/editCaption.md) не будет работать, в этом случае нужно использовать [editText](/classes/messageMethods/editText.md)
:::

## Параметры метода
| # |   Название    |      Тип      |
|:-:|:-------------:|:-------------:|
| 1 | **messageID** | `int`\|`null` |
| 2 |  **chatID**   | `int`\|`null` |

## Возвращает
`array` - ответ от Телеграма, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\ZenithGram\ZG;
use ZhenyaGR\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onBotCommand('edit', '/edit')
    ->func(function(ZG $tg) {
        // !!! У СООБЩЕНИЯ ОБЯЗАТЕЛЬНО ДОЛЖНО БЫТЬ МЕДИА
        $response = $tg->msg("Это сообщение будет изменено.")
            ->img('https://example.com/img.jpg')
            ->send();
        // Получаем ID отправленного сообщения
        $messageId = $response['result']['message_id'];
        // Пауза для наглядности (!!! Не используйте в реальных проектах !!!)
        sleep(3);
        // Редактируем сообщение
        $tg->msg("Сообщение было успешно изменено!")
            ->editCaption($messageId);
    });

// 2. Обрабатываем нажатие на кнопку
$bot->onCallback('edit_in_chat', '/edit_in_chat')
    ->func(function(ZG $tg) {
        // ID чата, в котором нужно отредактировать сообщение
        $chatIdToEdit = 123456789;
        // ID сообщения для редактирования (предположим, мы его уже знаем)
        $messageIdToEdit = 987;

        $tg->msg("Редактирование сообщения в другом чате.")
            ->editCaption($messageIdToEdit, $chatIdToEdit);
    });

$bot->run();
```