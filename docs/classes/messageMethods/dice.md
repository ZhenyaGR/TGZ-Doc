---
title: Message
sidebarDepth: 0
---

# dice
Метод отправляет анимированный эмодзи

## Параметры метода
| # | Название |   Тип    |                      Описание                       |
|:-:|:--------:|:--------:|:---------------------------------------------------:|
| 1 | **url**  | `string` | Принимает эмодзи: `🎲`, `🎯`, `🏀`, `⚽`, `🎳`, `🎰` |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    $emoji = ["🎲", "🎯", "🏀", "⚽", "🎳", "🎰"];
    $dice = $emoji[array_rand($emoji)];

    switch ($text) {

        case '/dice':
            $tg->msg() // Телеграм проигнорирует текст
                ->dice($dice)
                ->send();
            break;
    }
}
```
