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
`Message` - экземпляр класса Message, содержащий информацию о сообщении

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

  
