---
title: Message
sidebarDepth: 0
---

## dice
Метод отправляет анимированный эмодзи
### Параметры метода
| # | Название |   Тип    |                      Описание                       |
|:-:|:--------:|:--------:|:---------------------------------------------------:|
| 1 | **url**  | `string` | Принимает эмодзи: `🎲`, `🎯`, `🏀`, `⚽`, `🎳`, `🎰` |
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

    $emoji = ["🎲", "🎯", "🏀", "⚽", "🎳", "🎰"];
    $dice = $emoji[array_rand($emoji)];

    switch ($text) {

        case '/sticker':
            $tg->msg() // Телеграм проигнорирует текст
                ->dice($dice)
                ->send();
            break;
    }
}
```

#### Получить ID файла можно с помощью метода [getFileID](/classes/tgzMethods/getFileID.md)_