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
- `ZG` - экземпляр основного класса.
Ваша функция может принимать аргументы, извлеченные из сообщения пользователя:
- Для `onCommand`: значения, соответствующие плейсхолдерам (`{name}`, `{age}`), или все аргументы команды.
- Для `onCallback`: значения, соответствующие плейсхолдерам (`{name}`, `{age}`).
- Для `onTextPreg`: значения совпадений из `preg_match`.
- Для `onReferral`: значения из реферальной ссылки.
- Для `onLeftChatMember`: экземпляр класса `UserDto`.
- Для `onNewChatMember`: экземпляры класса `UserDto`.

:::warning Dependency Injection 
Строгие аргументы, описанные выше, будут работать только в случае, когда у вас не задана рефлексия.</br>
При использовании Reflection API аргументы изменяются, их можно передавать в произвольном порядке, а также внедрять свои классы. 
:::

## Аргументы обработчика с Reflection API
- `ZG`: Экземпляр основного класса.
- `ChatDto`: DTO с описанием чата.
- `UserDto`: DTO с описанием пользователя.
- `MessageDto`: DTO с описанием сообщения.
- `Containers`: Все кастомные контейнеры пользователя
- `Все аргументы выше`: Все остальные значения из обработчиков (Плейсхолдеры, Matches и т.д.)

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Пример с onCommand и аргументами
$bot->onCommand('ban', '!ban {username} {reason}')
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

## Пример использования с Reflection API
В примере показан очень простой функционал без кеша и контейнеров.</br>
В продакшене необходимо использовать кеш, т.к. Reflection API очень долгая операция.</br>
Подробнее можно узнать в [Внедрение зависимостей](/using/reflection)

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\MessageParseMode;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->reflection(); // Запускаем рефлексию

// Полное совпадение с вызовами UserDto, ChatDto, ZG
$bot->onText('hello', 'Привет')
    ->func(function (UserDto $user, ChatDto $chat, ZG $tg) {
        $tg->msg("Привет, {$user->firstName}!")->send();
    });

// Именные плейсхолдеры можно вызывать в произвольном порядке
$bot->onCommand('gift', '/gift {username} {amount}')
    ->func(function (ZG $tg, $amount, string $username) {
        // $username и $amount будут автоматически заполнены из текста команды
        $tg->msg("Отправлено $amount монет пользователю $username")->send();
    });

$bot->run();
```