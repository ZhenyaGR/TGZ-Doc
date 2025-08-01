---
title: Message
sidebarDepth: 0
---

## sendEditText
Метод редактирует текст сообщения
### Параметры метода
| # |   Название    |      Тип      |
|:-:|:-------------:|:-------------:|
| 1 | **messageID** | `int`\|`null` |
| 2 |  **chatID**   | `int`\|`null` |
### Возвращает
`array` - ответ от Телеграма, содержащий информацию о сообщении
### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$tg->initText($text)
    ->initType($type);

if ($type === 'bot_command') {
        case '/edit':
            // Сначала отправляем сообщение
            $response = $tg->msg("Это сообщение будет изменено")->send();
            
            // Получаем ID отправленного сообщения
            $messageId = $response['result']['message_id'];
            
            // Пауза для наглядности (!!! Не используйте в реальных проектах !!!)
            sleep(3);

            // Редактируем сообщение
            $tg->msg("Сообщение было успешно изменено!")
                ->editText($messageId);
            break;
            
        case '/edit_in_chat':
            // ID чата, в котором нужно отредактировать сообщение
            $chatIdToEdit = 123456789;
            // ID сообщения для редактирования (предположим, мы его уже знаем)
            $messageIdToEdit = 987;

            $tg->msg("Редактирование сообщения в другом чате.")
                ->editText($messageIdToEdit, $chatIdToEdit);
            break;
}
```
### Уточнение
Метод [editText](/classes/messageMethods/editText.md) работает только при условии, что в сообщении нет медиа: фото, видео и т.д.
Если в сообщении есть медиа, то нужно использовать [editCaption](/classes/messageMethods/editCaption.md)
