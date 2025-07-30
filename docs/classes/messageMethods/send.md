---
title: Message
sidebarDepth: 0
---

## send
Метод отправляет сообщение
### Параметры метода
| # |             Название             |      Тип      |
|:-:|:--------------------------------:|:-------------:|
| 1 |            **chatID**            | `int`\|`null` |
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
    switch ($text) {
        case '/send':
            $tg->msg("Отправка сообщения")
                ->send();
            break;
            
        case '/sendChatID':   
            $tg->msg("Отправка сообщения в чат с id = 123")
                ->send(123);
            break;
    }    
}
```