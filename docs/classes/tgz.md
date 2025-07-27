---
title: SimpleVK
sidebarDepth: 0
---

## Подключение
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
```

## create
С помощью метода `create` создается экземпляр класса `TGZ`
### Используя токен бота, полученный в [BotFather](https://t.me/BotFather) 
#### Параметры метода
| # | Название  |   Тип    | Описание                          |
|:-:|:---------:|:--------:|-----------------------------------|
| 1 | **token** | `string` | Токен пользователя или сообщества |
```php:no-line-numbers
$tg = TGZ::create(ТОКЕН);
```

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
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
// В $update хранится событие, которое пришло от Телеграма
$update = $tg->initVars($chat_id, $user_id, $text, $type, $callback_data, $query_id, $msg_id, $is_bot, $is_command);

if ($type === 'text') { // проверяем тип события
    $tg->reply("Твой user_id - " . $user_id);
}
```
### Дополнительные возможности и их разбор
* Вы можете менять названия переменных
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

## msg
Метод создает объект класса Message для конструктора сообщений
### Параметры метода
|#  | Название |   Тип    |
|:-:|:--------:|:--------:|
|1  |   **text**   | `string` |
### Возвращает
`Message` - экземпляр класса Message
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->msg("Привет")->send();
```
#### Подробнее про класс Message [здесь](docs/classes/message.md)

## poll
Метод создает объект класса Poll для конструктора опросов
### Параметры метода
| # | Название |   Тип    |           Описание            |
|:-:|:--------:|:--------:|:-----------------------------:|
| 1 | **type** | `string` | Тип опроса: `regular`, `quiz` |
### Возвращает
`Poll` - экземпляр класса Poll
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```
#### Подробнее про класс Poll [здесь](docs/classes/poll.md)

## inline
Метод создает объект класса Inline для конструктора Inline-запросов
### Параметры метода
| # | Название |   Тип    |                                       Описание                                       |
|:-:|:--------:|:--------:|:------------------------------------------------------------------------------------:|
| 1 | **type** | `string` | Тип Inline-запроса: `article`, `photo`, `gif`, `video`, `audio`, `voice`, `document` |
### Возвращает
`Inline` - экземпляр класса Inline
### Пример использования 
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$inline_result = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('Текст сообщения')
        ->create(),
];
```
#### Подробнее про класс Inline [здесь](docs/classes/inline.md)

## defaultParseMode
Метод устанавливает режим разметки для каждого сообщения по умолчанию
### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->defaultParseMode('MarkdownV2');
```

## delMsg
Метод удаляет одно или несколько сообщений
### Параметры метода
| # |  Название   |               Тип                |
|:-:|:-----------:|:--------------------------------:|
| 1 | **msg_ids** |      `int`\|`array`\|`null`      |
| 2 | **chat_id** | `int`\|`string`\|`array`\|`null` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initMsgID($msg_id);
$tg->delMsg($msg_id);
```

## сopyMsg
Метод копирует одно или несколько сообщений
### Параметры метода
| # |     Название     |               Тип                |                       Описание                       |
|:-:|:----------------:|:--------------------------------:|:----------------------------------------------------:|
| 1 |   **msg_ids**    |      `int`\|`array`\|`null`      |               Идентификаторы сообщений               |
| 2 |   **chat_id**    | `int`\|`string`\|`array`\|`null` | Идентификатор чата, из которого копируются сообщения |
| 3 | **from_chat_id** | `int`\|`string`\|`array`\|`null` |  Идентификатор чата, в который копируются сообщения  |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initMsgID($msg_id);
$tg->copyMsg($msg_id);
```

(string $url, int $chat_id, $type

## getFileID
Метод сначала загружает файл на сервер Telegram, а затем возвращает ID файла, для последующей быстрой отправки
### Параметры метода
| # |  Название   |           Тип           |                                            Описание                                             |
|:-:|:-----------:|:-----------------------:|:-----------------------------------------------------------------------------------------------:|
| 1 |   **url**   |        `string`         |                                         Ссылка на файл                                          |
| 2 |  **type**   |    `string`\|`null`     | Тип файла: `document`, `audio`, `photo`, `animation`, `video`, `video_note`, `voice`, `sticker` |
| 3 | **chat_id** | `int`\|`string`\|`null` |                                             ID чата                                             |
### Возвращает
`$file_id` - ID файла
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initChatID($chat_id);
$file_id = $tg->getFileID('example.com/image.jpg', $chat_id, 'photo');
echo $file_id;
```

## reply
Метод отправляет сообщение в чат
### Параметры метода
| # |  Название   |       Тип       |      Описание       |
|:-:|:-----------:|:---------------:|:-------------------:|
| 1 | **message** |    `string`     |   Текст сообщения   |
| 2 | **params**  | `array`\|`null` | Параметры сообщения |
### Возвращает
`array` - массив с ответом от Телеграма
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initType($type);
if ($type === 'text' || $type === 'bot_command')
    $tg->reply('Привет!');
}
```

## buttonText
Метод возвращает массив с текстовой кнопкой
### Параметры метода
| # |    Название    |   Тип    |
|:-:|:--------------:|:--------:|
| 1 | **buttonText** | `string` |
### Возвращает
`array` - массив с текстовой кнопкой
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$kbd = [[$tg->buttonText('Нажми меня')]];
$tg->msg('Текстовая кнопка')
    ->kbd($kbd)
    ->send();
```

## buttonCallback
Метод возвращает массив с callback-кнопкой
### Параметры метода
| # |    Название    |   Тип    |
|:-:|:--------------:|:--------:|
| 1 | **buttonText** | `string` |
| 2 | **buttonData** | `string` |
### Возвращает
`array` - массив с callback-кнопкой
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$kbd = [[$tg->buttonCallback('Нажми меня', 'callback_data')]];
$tg->msg('Callback-кнопка')
    ->kbd($kbd, inline: true)
    ->send();
```

## buttonUrl
Метод возвращает массив с url-кнопкой
### Параметры метода
| # |    Название    |   Тип    |
|:-:|:--------------:|:--------:|
| 1 | **buttonText** | `string` |
| 2 | **buttonUrl**  | `string` |
### Возвращает
`array` - массив с url-кнопкой
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$kbd = [[$tg->buttonUrl('Нажми меня', 'https://google.com')]];
$tg->msg('Url-кнопка')
    ->kbd($kbd, inline: true)
    ->send();
```

answerInlineQuery
answerCallbackQuery

## answerCallbackQuery
Метод отправляет ответ Телеграму на callback-запрос
### Параметры метода
| # |    Название    |   Тип    |
|:-:|:--------------:|:--------:|
| 1 | **callbackID** | `string` |
| 2 |  **options**   | `array`  |
### Возвращает
`array` - массив с ответом от Телеграма
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'callback_query') {
    $tg->answerCallbackQuery($query_id, ['text' => 'Вы нажали на кнопку']);
}
```

## answerInlineQuery
Метод отправляет ответ Телеграму на inline-запрос
### Параметры метода
| # |   Название   |   Тип    |
|:-:|:------------:|:--------:|
| 1 | **query_id** | `string` |
| 2 |  **result**  | `array`  |
### Возвращает
`array` - массив с ответом от Телеграма
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'inline_query') {
    $tg->answerInlineQuery($query_id, $inline_result);
}
```
