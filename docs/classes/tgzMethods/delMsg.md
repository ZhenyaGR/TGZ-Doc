---
title: TGZ
sidebarDepth: 0
---

# delMsg
Метод удаляет одно или несколько сообщений

## Параметры метода
| # |  Название   |               Тип                |
|:-:|:-----------:|:--------------------------------:|
| 1 | **msg_ids** |      `int`\|`array`\|`null`      |
| 2 | **chat_id** | `int`\|`string`\|`array`\|`null` |

## Возвращает
`array` - массив с ответом от Telegram

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$msg_id = $tg->getMsgId();
$tg->delMsg($msg_id);
```
