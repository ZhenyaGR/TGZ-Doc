---
title: Примеры ботов
---

# Примеры ботов

## Минимальный Callback
> Бот отвечает на любое сообщение
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$tg->reply('Привет, Мир!');
```


## Простой Callback – (Эхо-бот)
> Бот копирует любое сообщение
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(ТОКЕН);

$type = $tg->getType(); // Получение типа из события

if ($type === 'text' || $type === 'bot_command') {
    $tg->copyMsg();
}
```


## Простой LongPoll – (Эхо-бот)
```php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\LongPoll;
use ZhenyaGR\TGZ\TGZ;

$lp = LongPoll::create($botToken , 20);

$lp->listen(function(TGZ $tg) {
    
    $type = $tg->getType(); 
    
    if ($type === 'text' || $type === 'bot_command') {
        $tg->copyMsg();
    }
});
```


## Бот на конструкторе (Callback)
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create(ТОКЕН);
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onCommand('img', '!картинка')
    ->img('cat.jpg')
    ->text('Вот твой кот');
    
$bot->run(); // Запускаем обработку события
```


## Бот на конструкторе (LongPoll)
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\LongPoll;
use ZhenyaGR\TGZ\Bot;

$lp = LongPoll::create(ТОКЕН);
  
$lp->listen(function (TGZ $tg) {
    $bot = new Bot($tg); // Создаем экземпляр бота

    $bot->onCommand('img', '!картинка')
        ->img('cat.jpg')
        ->text('Вот твой кот');
    
    $bot->run(); // Запускаем обработку события
});
```


## Бот с обработкой Команд на конструкторе (Callback)
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create(ТОКЕН);
$bot = new Bot($tg); // Создаем экземпляр бота

// Создание кнопки с её обработкой
$bot->btn('callback1', 'Кнопка 1')->query("Callback кнопка");

// Обработка команды бота
$bot->onBotCommand('img', '/img')
    ->img('cat.jpg')
    ->text('Изображение с кнопкой')
    ->inlineKbd([
        ['callback1'], [$tg->buttonCallback('callback2', 'Кнопка 2')]
    ]);

// Обработка команды с параметрами
$bot->onCommand('sum', '!посчитай %n + %n')
    ->func(function (TGZ $tg, $number1, $number2) {
        $tg->msg($number1 + $number2)->send();
    });

// Обработка полного совпадения текста
$bot->onText('help', "помощь")->func(function (TGZ $tg) {
    $tg->msg("Никто тебе не поможет")->send();
});

// Обработка команды по регулярному выражению
$bot->onTextPreg('more_word', "!\!напиши (.*)!")
    ->func(function (TGZ $tg, $match) {
        $tg->msg("Ваше предложение: " . $match)->send();
    });

// Обработка неизвестного текста
$bot->onDefault()
    ->func(function (TGZ $tg) {
        $tg->msg("Я не понимаю твоего текста")->send();
    });

// Обработка callback, если у кнопки нет обработки
$bot->onCallback('callback2')
    ->func(function (TGZ $tg) {
        $query_id = $tg->getQueryId(); 
        $tg->answerCallbackQuery($query_id);
    
        $tg->msg("Вы нажали на кнопку")->editText();
    });

$bot->run();
```


## Бот с обработкой Кнопок на конструкторе (Callback)
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';


use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;

$tg = TGZ::create(ТОКЕН);
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onDefault()->func(function () use ($bot) {
    $bot->run('first');
    // Запускаем команду с id 'first'
});

$bot->onBotCommand('first', '/start')
    ->kbd([['fish', 'cat']])
    ->text('Выберите животное:'); 

$bot->btn('fish', 'Рыбка')->text('Вы выбрали Рыбку!')->img('fish.jpg');
$bot->btn('cat', 'Котик')->text('Вы выбрали Котика!')->img('cat.jpg');

$bot->run();
```

## Бот с обработкой Inline-Кнопок на конструкторе (Callback)
```php
<?php
require 'vendor/autoload.php';

use ZhenyaGR\TGZ\TGZ;

$tg = new TGZ('BOT_TOKEN');
$bot = new \ZhenyaGR\TGZ\Bot($tg);

$bot->btn('like', '👍')
    ->query('Спасибо за оценку!')
    ->text("Спасибо за лайк!");
    
$bot->btn('dislike', '👎')
    ->query('Спасибо за оценку!')
    ->text("Жаль, что не понравилось...");

$bot->onBotCommand('vote', '/vote')
    ->text("Нравится ли тебе этот бот?")
    ->inlineKbd([['like', 'dislike']]);

$bot->run();
```


### Больше примеров
В документации для каждого метода есть примеры его использования.