---
title: Action
---

## dice
Метод `dice` отправляет анимированный эмодзи

### Параметры

| # | Название |   Тип    | Описание                                            |
|:-:|:--------:|:--------:|:----------------------------------------------------|
| 1 | **dice** | `string` | Принимает эмодзи: `🎲`, `🎯`, `🏀`, `⚽`, `🎳`, `🎰` |

### Возвращает

`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`,`func` и т.д.).

### Пример использования

```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);
$emoji = ["🎲", "🎯", "🏀", "⚽", "🎳", "🎰"];
$dice = $emoji[array_rand($emoji)];

$bot->onText('dice')
    ->dice($dice);

$bot->run();
```