---
title: ErrorHandler
description: "Настройка обработки и логирования ошибок (ErrorHandler)."
sidebarDepth: 0
---

# Обработка Ошибок (Error Handling)
В библиотеке реализован трейт `ErrorHandler`, который предоставляет мощные механизмы для перехвата, форматирования и отправки информации об ошибках и исключениях.

:::tip Как использовать?
Трейт используется в классе `ZG`. А в `LongPoll` имеет дубликаты методов для чистоты кода и простого использования
:::

## enableDebug
Запускает отлов ошибок. Для его работы необходимо либо задать ID пользователя(ей), куда будут отправляться отчеты об ошибках, либо обработчик, который будет обрабатывать ошибки.

### Параметры метода
Метод не принимает параметров

### Примеры использования
WebHook:
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$tg->enableDebug();
```

Longpoll:
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\LongPoll;

$lp = LongPoll::create(BOT_TOKEN);
$lp->enableDebug();
```

## setSendIds
Метод задаёт пользователей или чаты, которым будет отформатирована и отправлена информация о ошибках.

### Параметры метода
| # | Название | Тип                                 | Описание                                                                              |
|:-:|:---------|:------------------------------------|---------------------------------------------------------------------------------------|
| 1 | **ids**  | `int`\|`string`\|`array`            | Один или несколько ID пользователей/чатов, куда будут отправляться отчеты об ошибках  |

### Возвращает
`ZG`|`LongPoll` - Экземпляр класса `ZG`|`LongPoll` в зависимости от применения для цепочки методов.

### Примеры использования
WebHook:
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$tg->enableDebug()
    ->setSendIds(123456789); // Один пользователь

$tg->enableDebug()
    ->setSendIds([123456789, 987654321]); // Два пользователя
```

Longpoll:
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\LongPoll;

$lp = LongPoll::create(BOT_TOKEN);
$lp->enableDebug()
    ->setSendIds(123456789); // Один пользователь

$lp->enableDebug()
    ->setSendIds([123456789, 987654321]); // Два пользователя
```

[//]: # ($tg->setUserLogError&#40;function&#40;string $type, string $message, ?int $code, ?Throwable $exception&#41; {)
[//]: # (// Здесь вы можете записать ошибку в файл, отправить в Sentry и т.д.)
[//]: # (error_log&#40;"[$type] Ошибка: " . $message&#41;;)
[//]: # (}&#41;;)


## setHandler
Метод задаёт обработчик, в который будет передан основной класс `ZG` и ошибка `Throwable`.

### Параметры метода
| # | Название    | Тип        | Описание                                          |
|:-:|:------------|:-----------|---------------------------------------------------|
| 1 | **handler** | `callable` | Функция, которая будет вызвана при отлове ошибки. |

### Возвращает
`ZG`|`LongPoll` - Экземпляр класса `ZG`|`LongPoll` в зависимости от применения для цепочки методов.

### Пример использования
Далее примеры будут только для WebHook
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$tg->enableDebug()
    ->setHandler(function(ZG $tg, Throwable $e) {
        $tg->reply("В боте возникла неизвестная ошибка!\n" . $e->getMessage());
    });
```

:::tip 
Методы `setSendIds` и `setHandler` не взаимоисключающие, их можно комбинировать вместе для гибкой обработки ошибок
:::

## setTracePathFilter
Метод `setTracePathFilter` позволяет указать пути к файлам или директориям, которые будут скрыты или сокращены в трассировке стека ошибок.

### Параметры метода
| # | Название | Тип      | Описание                                  |
|:-:|:---------|:---------|-------------------------------------------|
| 1 | **path** | `string` | Один путь для фильтрации.                 |

### Возвращает
`ZG`|`LongPoll` - Экземпляр класса `ZG`|`LongPoll` в зависимости от применения для цепочки методов.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN)
    ->enableDebug()
    ->setSendIds(123456789)
    ->setTracePathFilter('/path/to/your/project');
    // Фильтрация до папки project
```

## shortTrace
Метод `shortTrace` позволяет настроить отображение трассировки стека ошибок, оставляя только те кадры, которые относятся к вашему пользовательскому коду.

### Параметры метода
| # | Название   |  Тип   | Описание                                                             |
|:-:|:-----------|:------:|----------------------------------------------------------------------|
| 1 | **enable** | `bool` | Если `true`, активирует короткую трассировку (по умолчанию `false`). |

### Возвращает
`ZG`|`LongPoll` - Экземпляр класса `ZG`|`LongPoll` в зависимости от применения для цепочки методов.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN)
    ->enableDebug()
    ->setSendIds(123456789)
    ->shortTrace(true); 
    // Включение короткой трассировки
```
