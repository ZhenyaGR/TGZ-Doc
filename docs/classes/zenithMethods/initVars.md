---
title: initVars
description: "Инициализирует основные переменные (chat_id, user_id, text) из входящего обновления."
sidebarDepth: 0
---

# initVars
Метод принимает переменные по ссылке и записывает в них определенные значения из пришедшего от Telegram события, если они доступны. Если данные не пришли, то в переменные будет передан `null`

:::warning Устаревший метод
Вместо это метода предпочтительно использовать get-методы.

Синтаксис через ссылку устарел.
:::

## Параметры метода
| # |       Название |       Тип       |                Будет передан                |
|:-:|---------------:|:---------------:|:-------------------------------------------:|
| 1 |       &chat_id |      `int`      |            `Идентификатор чата`             |
| 2 |       &user_id |      `int`      |        `Идентификатор пользователя`         |
| 3 |          &text |    `string`     |              `Текст сообщения`              |
| 4 |          &type |    `string`     |                `Тип события`                |
| 5 | &callback_data |    `string`     |        `Данные пришедшего callback`         |
| 6 |      &query_id |    `string`     |  `Идентификатор Callback или Inline Query`  |
| 7 |        &msg_id | `int`\|`string` |          `Идентификатор сообщения`          |
| 8 |        &is_bot |     `bool`      |      `Является ли пользователь ботом`       |
| 9 |    &is_command |     `bool`      | `Является ли сообщение командой (/anyText)` |

## Возвращает
`Update` - Массив с событием от Telegram.

## Примеры использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
// В $update хранится событие, которое пришло от Телеграма
$update = $tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

if ($type === 'text') { // Проверяем тип события
    $tg->reply("Твой user_id - " . $user_id);
}
```