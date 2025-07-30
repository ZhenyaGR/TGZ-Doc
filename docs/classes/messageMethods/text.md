---
title: Message
sidebarDepth: 0
---

## text
Метод изменяет/задаёт текст для сообщения
### Параметры метода
| # | Название |   Тип    |
|:-:|:--------:|:--------:|
| 1 | **text** | `string` |
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
        case '/text':
            $tg->msg()   // Задаём текст сообщения не при создании сообщения, а в промежуточной функции
                ->text("Текст сообщения")
                ->send();
            break;
           
        case '/textChange':
            $send = $tg->msg("Изначальное сообщение"); 
            // Какой-то код...
            $send->text("Изменяем существующий текст")->send();
            break;
    }
}
```