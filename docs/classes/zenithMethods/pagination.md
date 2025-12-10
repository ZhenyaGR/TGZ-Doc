---
title: pagination
description: "Создает экземпляр класса Pagination для генерации страниц."
sidebarDepth: 0
---

# pagination
Метод создает объект класса `Pagination` для конструктора страниц.

## Параметры метода
Метод не принимает параметров.

## Возвращает
`Pagination` - экземпляр класса Pagination.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);
$pager = $tg->pagination();
```
## Подробнее про класс Pagination [здесь](/classes/pagination.md)
