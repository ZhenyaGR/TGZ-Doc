---
title: DTO
description: "Объекты данных UserDto и ChatDto."
---

# DTO
DTO (Data Transfer Object) - простой объект, хранящий в себе необходимые данные.

## UserDto
Объект, содержащий информацию о пользователе.

### Параметры
| Параметр     | Тип              | Описание                       |
|--------------|------------------|--------------------------------|
| id           | `int`            | Идентификатор пользователя     |
| isBot        | `bool`           | Является ли пользователь ботом |
| firstName    | `string`         | Имя пользователя               |
| lastName     | `string`\|`null` | Фамилия пользователя           |
| username     | `string`\|`null` | @ пользователя                 |
| languageCode | `string`\|`null` | Код языка                      |

### Пример
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Dto\UserDto; // Импортируем класс

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onCommand('/userdto')
    ->func(function (TGZ $tg) {
    
        $user = $tg->getUserDto();
    
        $id = $user->id;
        $isBot = $user->isBot;
        $firstName = $user->firstName;
        $lastName = $user->lastName;
        $username = $user->username;
        $languageCode = $user->languageCode;
    
        $tg->msg(
            "Вся информация о пользователе:\n" .
            "ID: $id\n" .
            "Является ботом: " . ($isBot ? 'да' : 'нет') . "\n" .
            "Имя: $firstName\n" .
            "Фамилия: " . ($lastName ?? 'отсутствует') . "\n" .
            "Username: " . $usernameText . "\n" .
            "Код языка: " . ($languageCode ?? 'не указан'),
        )->send();
        
});

$bot->run();
```

## ChatDto
Объект, содержащий информацию о чате. Это может быть личный чат, группа, супергруппа или канал.

### Параметры
| Параметр    | Тип              | Описание                                                            |
|-------------|------------------|---------------------------------------------------------------------|
| id          | `int`            | Уникальный идентификатор чата                                       |
| type        | `string`         | Тип чата. Может быть `private`, `group`, `supergroup` или `channel` |
| title       | `string`\|`null` | Название чата (для групп, супергрупп и каналов)                     |
| username    | `string`\|`null` | Username чата (для личных чатов, супергрупп и каналов)              |
| firstName   | `string`\|`null` | Имя собеседника в личном чате                                       |
| lastName    | `string`\|`null` | Фамилия собеседника в личном чате                                   |
| description | `string`\|`null` | Описание чата (для групп, супергрупп и каналов)                     |
| inviteLink  | `string`\|`null` | Основная пригласительная ссылка в чат                               |
| isForum     | `bool`\|`null`   | `true`, если супергруппа является форумом с темами (topics)         |

### Пример
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Dto\ChatDto; // Импортируем класс

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onCommand('/chatdto')
    ->func(function (TGZ $tg) {
    
        $chat = $tg->getChatDto();
    
        $id = $chat->id;
        $type = $chat->type;
        $title = $chat->title;
        $username = $chat->username;
        $firstName = $chat->firstName;
        $lastName = $chat->lastName;
        $description = $chat->description;
        $inviteLink = $chat->inviteLink;
        $isForum = $chat->isForum;
    
        $tg->msg(
            "Вся информация о чате:\n" .
            "ID: $id\n" .
            "Тип: $type\n" .
            "Название: " . ($title ?? 'отсутствует') . "\n" .
            "Username: @" . ($username ?? 'отсутствует') . "\n" .
            "Имя (для ЛС): " . ($firstName ?? 'не применимо') . "\n" .
            "Фамилия (для ЛС): " . ($lastName ?? 'не применимо') . "\n" .
            "Описание: " . ($description ?? 'отсутствует') . "\n" .
            "Ссылка-приглашение: " . ($inviteLink ?? 'отсутствует') . "\n" .
            "Является форумом: " . $isForumText,
        )->send();
        
    });

$bot->run();
```