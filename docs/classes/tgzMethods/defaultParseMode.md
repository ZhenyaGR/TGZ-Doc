---
title: TGZ
sidebarDepth: 0
---


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
