---
title: TGZ
sidebarDepth: 0
---

# TGZ

## initVars
Метод принимает переменные по ссылке и записывает в них определенные значения из пришедшего от Telegram события, если они доступны. Если данные не пришли, то в переменные будет передан `null`

### Параметры метода
| # |       Название |       Тип       |               Будет передан               |
|:-:|---------------:|:---------------:|:-----------------------------------------:|
| 1 |       &chat_id |      `int`      |           `Идентификатор чата`            |
| 2 |       &user_id |      `int`      |       `Идентификатор пользователя`        |
| 3 |          &text |    `string`     |             `Текст сообщения`             |
| 4 |          &type |    `string`     |               `Тип события`               |
| 5 | &callback_data |    `string`     |       `Данные пришедшего callback`        |
| 6 |      &query_id |    `string`     | `Идентификатор Callback или Inline Query` |
| 7 |        &msg_id | `int`\|`string` |         `Идентификатор сообщения`         |
| 8 |        &is_bot |     `bool`      |     `Является ли пользователь ботом`      |
| 9 |    &is_command |     `bool`      |     `Является ли сообщение командой`      |

### Возвращает
Массив с данными пришедшего события
### Примеры использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
// В $update хранится событие, которое пришло от Телеграма
$update = $tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

if ($type === 'text') { // Проверяем тип события
    $tg->reply("Твой user_id - " . $user_id);
}
```

```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

// В $update хранится событие, которое пришло от Телеграма.
// Все переменные (chat_id, user_id и т.д.) будут заполнены по ссылке.
$tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

if ($type === 'text') {
    $tg->reply("Привет, " . ($is_bot ? "другой бот!" : "пользователь!") . " Твой ID: " . $user_id . ", текст: " . $text);

} elseif ($type === 'bot_command') {
    $tg->reply("Вы отправили команду: " . $text);

} elseif ($type === 'callback_query') {
    $tg->answerCallbackQuery($query_id, ['text' => 'Получены данные: ' . $callback_data]);
    $tg->reply('Вы выбрали: ' . $callback_data);

} elseif ($type === 'inline_query') {
    // В этом случае text будет содержать запрос пользователя
    $results = [
        $tg->inline('article')
            ->id('inline_response_1')
            ->title('Ответ на inline-запрос')
            ->description('Ваш запрос: ' . $text)
            ->text('Вы ввели: ' . $text)
            ->create()
    ];
    $tg->answerInlineQuery($query_id, $results);

} else {
    $tg->reply("Получено событие типа: " . ($type ?: 'неизвестный'));
}
```

### Дополнительные возможности и их разбор
* Вы можете менять названия переменных
```php
$tg->initVars($chatID, $user, $message, $eventType);
```
* Вы можете использовать не все переменные, а только несколько первых:
```php
$tg->initVars($chat_id, $user_id, $text, $type);
```
* Вы можете инициировать конкретную переменную по её названию:
```php
$tg->initVars(type: $type);
```
* Дополнительно возвращает `update` - массив с пришедшим событием
```php
$update = $tg->initVars($chat_id, $user_id);
```
