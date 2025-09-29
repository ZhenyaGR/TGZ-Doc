---
title: TGZ
sidebarDepth: 0
---


# callAPI
Метод `callAPI` позволяет напрямую вызывать любые методы Telegram Bot API. Это низкоуровневый способ взаимодействия, который предоставляет максимальную гибкость.

## Параметры метода
| # |  Название  |   Тип    | Описание                                                         |
|:-:|:----------:|:--------:|------------------------------------------------------------------|
| 1 | **method** | `string` | Название метода Telegram API (например, `sendMessage`, `getMe`). |
| 2 | **params** | `array`  | Ассоциативный массив параметров для вызываемого метода.          |

## Возвращает
`array` - Массив с ответом от Telegram.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН_БОТА');

try {
    // Получение информации о боте
    $me = $tg->callAPI('getMe');
    echo "Имя бота: " . $me['result']['first_name'] . "\n";
    echo "Имя пользователя бота: @" . $me['result']['username'] . "\n";

    // Отправка простого текстового сообщения 
    $chat_id = 123456789; // Замените на реальный ID чата
    $response = $tg->callAPI('sendMessage', [
        'chat_id' => $chat_id,
        'text' => 'Привет из callAPI!'
    ]);
    if ($response['ok']) {
        echo "Сообщение успешно отправлено. ID сообщения: " . $response['result']['message_id'] . "\n";
    }

} catch (Exception $e) {
    echo "Ошибка при вызове API: " . $e->getMessage() . "\n";
}
```

# Магический метод __call

Метод `__call` позволяет вызывать любые методы Telegram Bot API, используя их название как имя метода.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ВАШ_ТОКЕН_БОТА');

try {
    // Получение информации о боте
    $me = $tg->getMe();
    echo "Имя бота: " . $me['result']['first_name'] . "\n";
    echo "Имя пользователя бота: @" . $me['result']['username'] . "\n";

    // Отправка простого текстового сообщения
    $chat_id = 123456789; // Замените на реальный ID чата
    $response = $tg->sendMessage([
        'chat_id' => $chat_id,
        'text' => 'Привет из __call!'
    ]);
    if ($response['ok']) {
        echo "Сообщение успешно отправлено. ID сообщения: " . $response['result']['message_id'] . "\n";
    }

} catch (Exception $e) {
    echo "Ошибка при вызове API: " . $e->getMessage() . "\n";
}
```