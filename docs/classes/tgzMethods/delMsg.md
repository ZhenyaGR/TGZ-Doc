---
title: TGZ
sidebarDepth: 0
---

## delMsg
Метод удаляет одно или несколько сообщений
### Параметры метода
| # |  Название   |               Тип                |
|:-:|:-----------:|:--------------------------------:|
| 1 | **msg_ids** |      `int`\|`array`\|`null`      |
| 2 | **chat_id** | `int`\|`string`\|`array`\|`null` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initMsgID($msg_id);
$tg->delMsg($msg_id);
```
