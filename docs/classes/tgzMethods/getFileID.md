---
title: TGZ
sidebarDepth: 0
---


## getFileID
Метод сначала загружает файл на сервер Telegram, а затем возвращает ID файла, для последующей быстрой отправки
### Параметры метода
| # |  Название   |           Тип           |                                            Описание                                             |
|:-:|:-----------:|:-----------------------:|:-----------------------------------------------------------------------------------------------:|
| 1 |   **url**   |        `string`         |                                         Ссылка на файл                                          |
| 2 |  **type**   |    `string`\|`null`     | Тип файла: `document`, `audio`, `photo`, `animation`, `video`, `video_note`, `voice`, `sticker` |
| 3 | **chat_id** | `int`\|`string`\|`null` |                                             ID чата                                             |
### Возвращает
`$file_id` - ID файла
### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initChatID($chat_id);
$file_id = $tg->getFileID('example.com/image.jpg', $chat_id, 'photo');
echo $file_id;
```
