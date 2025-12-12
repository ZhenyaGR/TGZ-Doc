---
title: func
description: "Выполняет пользовательскую функцию-обработчик."
---

# func
Метод позволяет назначить произвольную функцию (замыкание или любой другой `callable`) в качестве обработчика для маршрута. Это самый гибкий способ обработки событий, так как вы получаете полный контроль над логикой ответа.

Если для маршрута задан `func`, то автоматическая отправка сообщений через `text()`, `img()` и др. будет проигнорирована.

## Параметры
| # |  Название   |    Тип     | Описание                                                  |
|:-:|:-----------:|:----------:|:----------------------------------------------------------|
| 1 | **handler** | `callable` | Функция, которая будет вызвана при срабатывании маршрута. |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Аргументы обработчика
- `TGZ` - экземпляр основного класса.
Ваша функция может принимать аргументы, извлеченные из сообщения пользователя:
- Для `onCommand`: значения, соответствующие плейсхолдерам (`%w`, `%n`, `%s`), или все аргументы команды.
- Для `onTextPreg`: значения совпадений из `preg_match`.
- Для `onReferral`: значения из реферальной ссылки.
- Для `onLeftChatMember`: экземпляр класса `UserDto`.
- Для `onNewChatMember`: экземпляры класса `UserDto`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

// Пример с onCommand и аргументами
$bot->onCommand('ban', '!ban %w %s')
    ->func(function(ZG $tg, string $username, string $reason) {
        // Здесь может быть ваша логика: запись в БД, проверка прав и т.д.
        $tg->msg("✅ Пользователь `{$username}` забанен по причине: `{$reason}`")
           ->parseMode(MessageParseMode::MarkdownV2)
           ->send();
    });

// Пример с onTextPreg для извлечения данных
$bot->onTextPreg('order', '/заказ номер (\d+)/i')
    ->func(function(ZG $tg, int $orderId) {
        // Логика поиска заказа в базе данных
        $status = "в пути"; // Пример
        $tg->msg("Статус вашего заказа №{$orderId}: {$status}")->send();
    });

// Пример с onCallback, где нужна сложная логика
$bot->btn('confirm_delete', 'Да, удалить')
    ->func(function(ZG $tg) {
        $query_id = $tg->getQueryId();
        // Логика удаления...
        $tg->msg("Запись удалена.")->editText();
        $tg->answerCallbackQuery($query_id);
    });


$bot->run();
```