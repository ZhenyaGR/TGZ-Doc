---
title: TGZ
sidebarDepth: 0
---

## getWebhookUpdate
Метод возвращает пришедшее от Телеграма событие, через метод `Webhook`
### Возвращает
`array` - Массив с событием от Telegram API
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$update = $tg->getWebhookUpdate();
print_r($update);
```
