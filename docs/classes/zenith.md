---
title: ZG
description: "Основной класс библиотеки."
sidebarDepth: 0
---

# **ZG** 
Основной класс библиотеки `ZG`.

## Создание экземпляра `ZG`
Для создания экземпляра класса используется `create` – статический фабричный метод.

::: tip Токен
Токен создаётся, используя бота [BotFather](https://t.me/BotFather) 
:::

### Параметры метода
| # | Название  |   Тип    | Описание                                              |
|:-:|:---------:|:--------:|-------------------------------------------------------|
| 1 | **token** | `string` | Токен вашего Telegram бота, полученный от @BotFather. |

### Возвращает
`ZG` - экземпляр класса `ZG`, готовый к использованию.

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\ZenithGram\ZG;

// Замените 'ТОКЕН' на фактический токен вашего бота
$tg = ZG::create('ТОКЕН');
```

## Сценарии использования

1. Создание других экземпляров

```php
$message = $tg->msg();  // Класс Message
$bot = new Bot($tg);    // Класс Bot
```

2. Отправка запросов к Telegram API

```php
$me = $tg->callAPI('getMe');
$tg->answerCallbackQuery($query_id, ['text' => "Вы нажали кнопку!"]);
```

3. Работа с контекстом

```php
// Устаревший метод
$tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

// Стандартные геттеры
$chat_id = $tg->getChatId();
$user_id = $tg->getUserId();
```
