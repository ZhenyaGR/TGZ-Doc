---
title: TGZ
sidebarDepth: 0
---



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
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->msg("Привет")->send();
```
#### Подробнее про класс Message [здесь](/classes/message.md)
