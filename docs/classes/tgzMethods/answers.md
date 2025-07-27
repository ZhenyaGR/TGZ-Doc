---
title: TGZ
sidebarDepth: 0
---


## answerCallbackQuery
Метод отправляет ответ Телеграму на callback-запрос
### Параметры метода
| # |      Название       |   Тип    |
|:-:|:-------------------:|:--------:|
| 1 | **callbackQueryID** | `string` |
| 2 |     **options**     | `array`  |
### Возвращает
`array` - массив с ответом от Телеграма
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'callback_query') {
    $tg->answerCallbackQuery($query_id, ['text' => 'Вы нажали на кнопку']);
}
```

## answerInlineQuery
Метод отправляет ответ Телеграму на inline-запрос
### Параметры метода
| # |     Название      |   Тип    |
|:-:|:-----------------:|:--------:|
| 1 | **inlineQueryID** | `string` |
| 2 |    **result**     | `array`  |
### Возвращает
`array` - массив с ответом от Телеграма
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->initVars(query_id: $query_id, type: $type);
if ($type === 'inline_query') {
    $tg->answerInlineQuery($query_id, $inline_result);
}
```
