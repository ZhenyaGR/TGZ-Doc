---
title: TGZ
sidebarDepth: 0
---

# get-методы 
Служат для получения данных из пришедшего события

## getUpdate
Метод возвращает пришедшее от Телеграма событие, полученное через Webhook. Это основной метод, который нужно вызвать в самом начале для загрузки данных.

### Возвращает
`array` - Массив с событием от Telegram.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$update = $tg->getUpdate();
```

## getChatId
Метод возвращает идентификатор чата из пришедшего события.

### Возвращает
`?int` - ID чата или `null`, если его нет в событии.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$chat_id = $tg->getChatId();

```

## getUserId
Метод возвращает идентификатор пользователя, отправившего сообщение или совершившего действие.

### Возвращает
`?int` - ID пользователя или `null`, если его нет в событии.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$user_id = $tg->getUserId();
```

## getText
Метод возвращает текст сообщения из пришедшего события.

### Возвращает
`?string` - Текст сообщения или `null`, если это не текстовое сообщение.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$text = $tg->getText();
```

## getMsgId
Метод возвращает идентификатор сообщения из пришедшего события.

### Возвращает
`?int` - ID сообщения или `null`, если его нет в событии.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$message_id = $tg->getMsgId();
```

## getType
Метод определяет и возвращает тип пришедшего события (`text`, `callback_query` и т.д.).

### Возвращает
`string` - Тип события.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$type = $tg->getType();
```

## getQueryId
Метод возвращает идентификатор callback-запроса (нажатие на inline-кнопку) или inline-запроса.

### Возвращает
`?string` - ID запроса или `null`, если это не callback-событие.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$query_id = $tg->getQueryId();
```

## getCallbackData
Метод возвращает данные, привязанные к callback-кнопке.

### Возвращает
`?string` - Данные из `callback_data` или `null`, если их нет.

### Пример использования
```php
<?phprequire_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');
$callback_data = $tg->getCallbackData();
```

---

## Комплексный пример: Эхо-бот

Этот пример показывает, как методы работают вместе для создания простого бота, который отвечает на текстовые сообщения.

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН');

$chat_id = $tg->getChatID();
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'text') {
    $responseText = "Вы написали: " . $text;
    $tg->sendMessage($chat_id, $responseText);
}
```