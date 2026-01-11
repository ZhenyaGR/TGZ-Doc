---
title: removeKbd
description: "Удаляет клавиатуру."
sidebarDepth: 0
---

# removeKbd
Метод удаляет нижнюю клавиатуру

## Параметры метода
`removeKbd` не принимает параметров

## Возвращает
`Message`|`Action` - экземпляр класса Message или Action, содержащий информацию о сообщении

::: tip Контекст вызова
Этот метод реализован через общий трейт и возвращает текущий экземпляр объекта.</br>
Тип возвращаемого значения зависит от того, какой класс вы используете в данный момент:
*   При вызове у экземпляра **Message** вернется объект `Message`.
*   При вызове у экземпляра **Action** вернется объект `Action`.
    :::

## Пример использования
```php
<?php    
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG; 

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$bot->onCommand('removeKbd', '/removeKbd')
    ->func(function(ZG $tg) {
        $tg->msg("Клавиатура удалена")
            ->removeKbd()   // После отправки сообщения, клавиатура удаляется
            ->send();
    });

$bot->run();
```

  
