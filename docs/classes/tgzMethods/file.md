---
title: TGZ
sidebarDepth: 0
---

## file
Метод создает объект класса `File` для работы с файлами

### Параметры метода
| # |  Название   |   Тип    | Описание |
|:-:|:-----------:|:--------:|:--------:|
| 1 | **file_id** | `string` | ID файла |

### Возвращает
`File` - экземпляр класса File

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$img_id = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef...";

$tg->file($img_id)->save('downloads/img.jpg');
```

#### Подробнее про класс Item [здесь](/classes/file.md)
