---
title: DTO
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
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Dto\UserDto; // Импортируем класс

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

$bot->onNewChatMember()
    ->func(function (TGZ $tg, UserDto $user) {
    
        $id = $user->id;
        $isBot = $user->isBot;
        $firstName = $user->firstName;
        $lastName = $user->lastName;
        $username = $user->username;
        $languageCode = $user->languageCode;
    
        $tg->msg("Приветствую в чате! \nВся информация о пользователе:\nID: $id\nЯвляется ли ботом: $isBot\nИмя: $firstName\nФамилия: $lastName\nUsername: $username\nКод языка: $languageCode")->send();
    });

$bot->run();
```