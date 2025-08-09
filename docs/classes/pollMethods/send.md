---
title: Poll
sidebarDepth: 0
---

## send
Метод отправляет опрос

### Параметры метода
| # | Название |      Тип      |                 Описание                 |
|:-:|:--------:|:-------------:|:----------------------------------------:|
| 1 | **chatID**  | `int`\|`null` | ID-чата, в который будет отправлен опрос |

### Возвращает
`array` — ответ от Телеграма

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```