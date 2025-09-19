---
title: TGZ
sidebarDepth: 0
---


# buttons
Методы для простой сборки клавиатуры

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
require_once __DIR__ . 'vendor/autoload.php';
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
require_once __DIR__ . 'vendor/autoload.php';
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
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$kbd = [[$tg->buttonUrl('Нажми меня', 'https://google.com')]];
$tg->msg('Url-кнопка')
    ->kbd($kbd, inline: true)
    ->send();
```