---
title: Inline
sidebarDepth: 0
---

## fileUrl
Метод `fileUrl` устанавливает URL-адрес файла, который отправит бот.

### Параметры метода
| # | Название |   Тип    |    Описание     |
|:-:|:--------:|:--------:|:---------------:|
| 1 | **url**  | `string` | Текст сообщения |

### Возвращает
`Inline` - экземпляр класса `Inline`.

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
$tg->initQuery($query_id);

$results = [
    $tg->inline('photo') // Тип inline-запроса `photo`
        ->id('photo')
        ->title('Команда')
        ->description('Описание команды')
        ->fileUrl('https://example.com/image.jpg')  // URL-адрес фото или прочего файла
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
```