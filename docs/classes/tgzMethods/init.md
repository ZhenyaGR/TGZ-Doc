---
title: TGZ
sidebarDepth: 0
---

## initVars
Метод принимает переменные по ссылке и записывает в них определенные значения из пришедшего от Телеграма, если они доступны. Если данные не пришли, то в переменные будет передан `null`
### Параметры метода
| # |       Название |      Тип      |               Будет передан               |
|:-:|---------------:|:-------------:|:-----------------------------------------:|
| 1 |       &chat_id |     `int`     |           `Идентификатор чата`            |
| 2 |       &user_id |     `int`     |       `Идентификатор пользователя`        |
| 3 |          &text |   `string`    |             `Текст сообщения`             |
| 4 |          &type |   `string`    |               `Тип события`               |
| 5 | &callback_data |   `string`    |       `Данные пришедшего callback`        |
| 6 |      &query_id |   `string`    | `Идентификатор Callback или Inline Query` |
| 7 |        &msg_id | `int\|string` |         `Идентификатор сообщения`         |
| 8 |        &is_bot |    `bool`     |     `Является ли пользователь ботом`      |
| 9 |    &is_command |    `bool`     |     `Является ли сообщение командой`      |

### Возвращает
Массив с данными пришедшего события
### Примеры использования
```php
<?php
require_once 'tgz/autoload.php';
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
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

// В $update хранится событие, которое пришло от Телеграма.
// Все переменные (chat_id, user_id и т.д.) будут заполнены по ссылке.
$update = $tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

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




## initChatID
Метод принимает переменную по ссылке и записывает в неё идентификатор чата из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  | Название  |     Тип    |
|:-:|:---------:|:----------:|
|1  | **chat_id** | `int`      |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$tg->initChatID($chat_id);
```


## initUserID
Метод принимает переменную по ссылке и записывает в неё идентификатор пользователя из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  |Название  |    Тип          |
|:-:|:-:|:--------------: |
|1  |**user_id\***  | `int`          |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$tg->initUserID($user_id);
```


## initText
Метод принимает переменную по ссылке и записывает в неё текст сообщения из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  |Название  |    Тип          |
|:-:|:--------:|:---------------:|
|1  |**text**  | `string`          |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$tg->initText($text);
```


## initMsgID
Метод принимает переменную по ссылке и записывает в неё идентификатор сообщения из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  |  Название  |    Тип     |
|:-:|:----------:|:----------:|
|1  | **msg_id** | `int`\|`string` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$tg->initMsgID($msg_id);
```


## initType
Метод принимает переменную по ссылке и записывает в неё тип пришедшего события
### Параметры метода
|#  | Название |   Тип    |
|:-:|:--------:|:--------:|
|1  | **type** | `string` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$tg->initType($type);
```


## initQuery
Метод принимает переменную по ссылке и записывает в неё идентификатор запроса из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  | Название |   Тип    |
|:-:|:--------:|:--------:|
|1  |   **query_id**   | `string` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initQuery($query_id);
```


## initCallbackData
Метод принимает переменную по ссылке и записывает в неё сообщение в Callback из пришедшего события, если поле есть. Если нет, то записывает `null`
### Параметры метода
|#  | Название |   Тип    |
|:-:|:--------:|:--------:|
|1  |  **callback_data**   | `string` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initCallbackData($callback_data);
```