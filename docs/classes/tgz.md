---
title: TGZ
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





