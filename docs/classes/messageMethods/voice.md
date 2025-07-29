---
title: Message
sidebarDepth: 0
---

## voice
Метод отправляет голосовое сообщение
### Параметры метода
| # | Название |       Тип        |                   Описание                   |
|:-:|:--------:|:----------------:|:--------------------------------------------:|
| 1 | **url**  |     `string`     | Принимает ссылку, локальный путь и ID файла |
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

    $voice_url = "https://example.com/voice.mp3";
    $voice_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $voice_path = "media/voice.mp3";

    switch ($text) {
        case '/voiceUrl':
            $tg->msg() // Телеграм проигнорирует текст
                ->voice($voice_url)
                ->send();
            break;
           
        case '/voiceId':
            $tg->msg() 
                ->voice($voice_id)
                ->send();
            break;
           
        case '/voicePath':
            $tg->msg() 
                ->voice($voice_path)
                ->send();
            break;
    }
}
```

#### Получить ID файла можно с помощью метода [getFileID](/classes/tgzMethods/getFileID.md)_