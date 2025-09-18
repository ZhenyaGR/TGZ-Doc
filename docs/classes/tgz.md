---
title: TGZ
sidebarDepth: 0
---

# **TGZ** 
Основной класс библиотеки `TGZ`.

## Создание экземпляра `TGZ`
Для создания экземпляра класса используется `create` – статический фабричный метод.

### Создаём, используя токен бота, полученный в [BotFather](https://t.me/BotFather) 

### Параметры метода
| # | Название  |   Тип    | Описание                                              |
|:-:|:---------:|:--------:|-------------------------------------------------------|
| 1 | **token** | `string` | Токен вашего Telegram бота, полученный от @BotFather. |

### Возвращает
`TGZ` - экземпляр класса `TGZ`, готовый к использованию.

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

// Замените 'ТОКЕН' на фактический токен вашего бота
$tg = TGZ::create('ТОКЕН');
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

4. Создание кнопок

```php
$keyboard = [
    [$tg->buttonCallback('Кнопка', 'callback_data')],
    [$tg->buttonUrl('Другая кнопка', 'google.com')],
];
```