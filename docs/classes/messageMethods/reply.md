---
title: Message
sidebarDepth: 0
---

## reply
Метод добавляет ответ на сообщение по его id
### Параметры метода
| # |             Название              |      Тип      |
|:-:|:---------------------------------:|:-------------:|
| 1 |      **reply_to_message_id**      | `int`\|`null` |
### Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении
### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$tg->initText($text)
    ->initType($type);

if ($type === 'bot_command') {    
    switch ($text) {
        case '/reply':
            $tg->msg("Ответ на отправленное сообщение")
                ->reply()
                ->send();
            break;
           
        case '/replyToID':
            $msg_id = 1234;
            $tg->msg("Ответ на сообщение по его id")
                ->reply($msg_id)
                ->send();
            break;
    }
}
```