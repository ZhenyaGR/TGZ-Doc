---
title: Message
sidebarDepth: 0
---

## sendEditCaption
Метод редактирует описание медиа
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
                ->editСaption($messageId);
            break;
            
        case '/edit_in_chat':
            // ID чата, в котором нужно отредактировать сообщение
            $chatIdToEdit = 123456789;
            // ID сообщения для редактирования (предположим, мы его уже знаем)
            $messageIdToEdit = 987;

            $tg->msg("Редактирование сообщения в другом чате.")
                ->editСaption($messageIdToEdit, $chatIdToEdit);
            break;
}
```

### Уточнение

В случае если в сообщении не было медиа, то метод [editCaption](/classes/messageMethods/editCaption.md) не будет работать, в этом случае нужно использовать [editText](/classes/messageMethods/editText.md)
Метод [editCaption](/classes/messageMethods/editCaption.md) работает только при условии, что в сообщении есть медиа: фото, видео и т.д