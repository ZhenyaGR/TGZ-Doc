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

$tg = ZG::create(BOT_TOKEN);
$tg->reply('Привет, Мир!');
```

## Простой Callback – (Эхо-бот)
> Бот копирует любое сообщение
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
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

$lp = LongPoll::create(BOT_TOKEN);
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

$tg = ZG::create(BOT_TOKEN);
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

$lp = LongPoll::create(BOT_TOKEN);
  
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

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg); // Создаем экземпляр бота

// Обработка команды бота
$bot->onBotCommand('img', '/img')
    ->img('cat.jpg')
    ->text('Изображение с котиком');
    
// Обработка команды с параметрами
$bot->onCommand('sum', '!посчитай {number1} + {number2}')
    ->func(function (ZG $tg, $number1, $number2) {
        $tg->msg($number1 + $number2)->send();
    });

// Обработка полного совпадения текста
$bot->onText('help', "помощь")->func(function (ZG $tg) {
    $tg->msg("Никто тебе не поможет")->send();
});

// Обработка команды по регулярному выражению
$bot->onTextPreg('more_word', '/^!напиши\s+(.*)/iu')
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

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg); // Создаем экземпляр бота

$bot->onStart()
    ->text('Выберите животное:')
    ->kbd([['fish', 'cat']]);

// Создаем кнопки с помощью класса Bot и сразу задаем их обработчики
$bot->btn('fish', 'Рыбка')->text('Вы выбрали Рыбку!')->img('fish.jpg');
$bot->btn('cat', 'Котик')->text('Вы выбрали Котика!')->img('cat.jpg');

// Создаем кнопки вручную с помощью класса Button
$bot->onBotCommand('/help')
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

$tg = ZG::create(BOT_TOKEN);
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

## Бот с пагинацией (Catalog Bot)
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Функция для генерации клавиатуры
// В реальном проекте будет использоваться база данных и т.д.
function getCatalogKeyboard(ZG $tg, int $page): array {
    $items = [];
    for ($i = 1; $i <= 50; $i++) {
        $items[] = Button::cb("Товар #$i", "buy_item_$i");
    }

    return $tg->pagination()
        ->setItems($items)
        ->setPerPage(6)         // 6 товаров на странице
        ->setColumns(2)         // 2 колонки
        ->setPage($page)
        ->setPrefix('catalog_page_') // Префикс для навигации
        ->addReturnBtn('🔙 Закрыть', 'close_menu')
        ->create();
}

// 1. Команда открытия каталога
$bot->onBotCommand('shop', '/shop')
    ->func(function(ZG $tg) {
        $tg->msg("📦 Каталог товаров (Стр. 1):")
           ->inlineKbd(getCatalogKeyboard($tg, 1))
           ->send();
    });

// 2. Обработка переключения страниц (ловится паттерн catalog_page_ЧИСЛО)
$bot->onCallbackPreg('shop_nav', '/^catalog_page_(\d+)$/')
    ->func(function(ZG $tg, $page) {
        $tg->answerCallbackQuery($tg->getQueryId());
        
        $tg->msg("📦 Каталог товаров (Стр. $page):")
           ->inlineKbd(getCatalogKeyboard($tg, (int)$page))
           ->editText();
    });

// 3. Обработка покупки товара (ловится buy_item_ЧИСЛО)
$bot->onCallbackPreg('buy_item', '/^buy_item_(\d+)$/')
    ->func(function(ZG $tg, $itemId) {
        $tg->answerCallbackQuery(
            $tg->getQueryId(), 
            ['text' => "Товар #$itemId добавлен в корзину! ✅"]
        );
    });

// 4. Закрытие меню
$bot->onCallback('close', 'close_menu')
    ->text('Каталог закрыт.')
    ->editText();

$bot->run();
```

## Админ-панель с Middleware
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

$admins = [123456789, 987654321]; // ID администраторов

$bot->onBotCommand('start', '/start')->text('Привет! Я бот.');

// Группа админских команд
$bot->onBotCommand('admin', '/admin')
    ->middleware(function(ZG $tg, callable $next) use ($admins) {
        // Проверяем права доступа
        if (in_array($tg->getUserId(), $admins)) {
            $next(); // Пропускаем дальше, если админ
        } else {
            $tg->reply("⛔ Доступ запрещен!");
        }
    })
    ->func(function(ZG $tg) {
        $tg->msg("Добро пожаловать в панель администратора!")
           ->inlineKbd([
               ['stats_admin'],
               ['broadcast_admin']
           ])
           ->send();
    });

// Действия кнопок админки
$bot->btn('stats_admin', '📊 Статистика')->query('Всего пользователей: 100500');
$bot->btn('broadcast_admin', '📢 Рассылка')->text('Введите текст рассылки...');

$bot->run();
```

## Бот-анкета (Диалоги / FSM)

> Пример бота, который проводит опрос пользователя, сохраняет данные между шагами и поддерживает кнопку "Отмена".

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Storage\FileStorage;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// 1. Подключаем хранилище (обязательно для FSM)
$bot->setStorage(new FileStorage());

// 2. Команда отмены (доступна всегда)
// Если пользователь в состоянии диалога, это выведет его оттуда
$bot->onBotCommand('cancel', '/cancel')
    ->func(function(ZG $tg) {
        $tg->reply("Диалог отменен.");
        $tg->endStep(); // Сброс состояния
    });

// 3. Старт анкеты
$bot->onBotCommand('survey', '/survey')
    ->func(function(ZG $tg) {
        $tg->msg("Оцените наш сервис от 1 до 5:")
           ->inlineKbd([
               [Button::cb('1', '1'), Button::cb('2', '2'), Button::cb('3', '3'), Button::cb('4', '4'), Button::cb('5', '5')]
           ])
           ->send();
           
        // Переходим в состояние ожидания оценки
        $tg->step('wait_rating');
    });

// 4. Обработка оценки (Ожидаем нажатие кнопки или текст)
$bot->onState('wait_rating')
    ->func(function(ZG $tg, string $input) {
        // Если это callback (нажатие кнопки), ответим на него
        if ($tg->getType() === 'callback_query') {
            $tg->answerCallbackQuery($tg->getQueryId());
        }

        // Проверяем ввод
        if (!in_array($input, ['1', '2', '3', '4', '5'])) {
            $tg->reply("Пожалуйста, нажмите на кнопку от 1 до 5.");
            return;
        }

        // Сохраняем оценку
        $tg->session(['rating' => $input]);

        $tg->msg("Спасибо! Теперь напишите краткий отзыв (или отправьте /skip, чтобы пропустить):")
           ->removeKbd() // Убираем старые клавиатуры если были
           ->send();

        $tg->step('wait_feedback');
    });

// 5. Обработка текста отзыва
$bot->onState('wait_feedback')
    ->func(function(ZG $tg, string $text) {
        $data = $tg->session(); // Получаем сохраненную ранее оценку
        $rating = $data['rating'];
        $review = ($text === '/skip') ? 'Без отзыва' : $text;

        // Формируем отчет
        $report = "📝 <b>Новый отзыв!</b>\n" .
                  "⭐ Оценка: {$rating}/5\n" .
                  "💬 Текст: " . htmlspecialchars($review);

        // Отправляем пользователю подтверждение
        $tg->msg("Ваш отзыв принят!\n\n$report")
           ->parseMode(\ZenithGram\ZenithGram\Enums\MessageParseMode::HTML)
           ->send();

        // (Опционально) Отправка админу
        // $tg->sendMessage(ADMIN_ID, $report);

        // Завершаем диалог
        $tg->endStep();
    });

$bot->run();
```

### Больше примеров
В документации для каждого метода есть примеры его использования.