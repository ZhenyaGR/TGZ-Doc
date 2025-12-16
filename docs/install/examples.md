---
title: Примеры ботов
description: "Коллекция примеров кода: Echo-бот, LongPoll, Webhook и использование конструктора Bot."
---

# Примеры ботов

## Минимальный Callback
> Бот отвечает на любое сообщение
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create('ТОКЕН_БОТА');
$tg->reply('Привет, Мир!');
```

## Простой Callback – (Эхо-бот)
> Бот копирует любое сообщение
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onMessage()->func(function(ZG $tg) {
    $tg->copyMsg();
});
$bot->run(); // Запускаем обработку события
```

## Простой LongPoll – (Эхо-бот)
```php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\LongPoll;
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$lp = LongPoll::create('ТОКЕН_БОТА', 20);
$bot = new Bot(); // Создаем экземпляр бота без основного класса

$bot->onMessage()->func(function(ZG $tg) {
    $tg->copyMsg();
});

$lp->listen(function(ZG $tg) {    
    $bot->zg($tg)->run(); // Пробрасываем класс и запускаем обработку события
});
```

## Бот с командой (Callback)
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onCommand('img', '!картинка')
    ->img('cat.jpg')
    ->text('Вот твой кот');
    
$bot->run(); // Запускаем обработку события
```


## Бот с командой (LongPoll)
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\LongPoll;
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$lp = LongPoll::create('ТОКЕН_БОТА');
  
$bot = new Bot(); // Создаем экземпляр бота без основного класса

$bot->onCommand('img', '!картинка')
    ->img('cat.jpg')
    ->text('Вот твой кот');
    
$lp->listen(function (ZG $tg) {
    $bot->zg($tg)->run(); // Пробрасываем класс и запускаем обработку события
});
```

## Бот с обработкой команд на конструкторе (Callback)
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg); // Создаем экземпляр бота

// Обработка команды бота
$bot->onBotCommand('img', '/img')
    ->img('cat.jpg')
    ->text('Изображение с котиком');
    
// Обработка команды с параметрами
$bot->onCommand('sum', '!посчитай %n + %n')
    ->func(function (ZG $tg, $number1, $number2) {
        $tg->msg($number1 + $number2)->send();
    });

// Обработка полного совпадения текста
$bot->onText('help', "помощь")->func(function (ZG $tg) {
    $tg->msg("Никто тебе не поможет")->send();
});

// Обработка команды по регулярному выражению
$bot->onTextPreg('more_word', "!\!напиши (.*)!")
    ->func(function (ZG $tg, $match) {
        $tg->msg("Ваше предложение: " . $match)->send();
    });

// Обработка неизвестного текста
$bot->onDefault()->func(function (ZG $tg) {
    $tg->msg("Я не понимаю твоего текста")->send();
});

$bot->run();
```


## Бот с обработкой текстовых кнопок на конструкторе (Callback)
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onStart()
    ->text('Выберите животное:')
    ->kbd([['fish', 'cat']]);

// Создаем кнопки с помощью класса Bot и сразу задаем их обработчики
$bot->btn('fish', 'Рыбка')->text('Вы выбрали Рыбку!')->img('fish.jpg');
$bot->btn('cat', 'Котик')->text('Вы выбрали Котика!')->img('cat.jpg');

// Создаем кнопки вручную с помощью класса Button
$bot->onBotCommand('/help')->
    ->text('Выбери, чья помощь тебе нужна')
    ->kbd([[
        Button::text('Человека'),
        Button::text('Бота'),
    ]]);

// Создаем обработчики для кнопок с помощью полного совпадения текста
$bot->onText('Человека')->text('Делать нам нечего, время на тебя тратить');
$bot->onText('Бота')->text('Он много электричества потребляет');
    
$bot->run();
```

## Бот с обработкой Inline-Кнопок на конструкторе (Callback)
```php
<?php
require 'vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

$bot->onBotCommand('/vote')
    ->text('Нравится ли тебе этот бот?')
    ->inlineKbd([['like', 'dislike']]);

// Создаем кнопки с помощью класса Bot и сразу задаем их обработчики
$bot->btn('like', '👍')->text('Спасибо за лайк!')->query('Спасибо за оценку!');
$bot->btn('dislike', '👎')->text('Жаль, что не понравилось...')->query('Спасибо за оценку!');

// Создаем кнопки вручную с помощью класса Button
$bot->onBotCommand('/grade')
    ->text('Оцени бота от 0 до 1')
    ->inlineKbd([[
        Button::cb('0', 'grade_0'),
        Button::cb('1', 'grade_1')
    ]]);
    
// Создаем обработчики для кнопок с помощью callback_data
$bot->onCallback('grade_0')->text('Придется от тебя избавится')->query('Оценка неправильная');
$bot->onCallback('grade_1')->text('Спасибо за непредвзятую оценку!')->query('Оценка отличная!');

$bot->run();
```

### Больше примеров
В документации для каждого метода есть примеры его использования.