---
url: 'https://zenithgram.github.io/using/reflection.md'
description: Использование Dependency Injection и рефлексии для чистого кода.
---

# Внедрение зависимостей и Рефлексия (Dependency Injection)
ZenithGram поддерживает мощный механизм внедрения зависимостей (Dependency Injection). Это позволяет писать более чистый, читаемый и тестируемый код, избавляя вас от необходимости вручную извлекать данные из объекта `$tg` внутри каждой функции.

## Как это работает
Обычно обработчик выглядит так:

```php
$bot->onCommand('start', '/start')->func(function(ZG $tg) {
    $user = $tg->getUser(); // Вручную достаем пользователя
    $chat = $tg->getChat(); // Вручную достаем чат
    // ... логика
});
```

С включенной рефлексией вы просто указываете, что вам нужно в аргументах функции:

```php
$bot->onCommand('start', '/start')->func(function(UserDto $user, ChatDto $chat) {
    // $user и $chat уже заполнены данными!
});
```

Библиотека анализирует типы аргументов вашей функции и автоматически подставляет нужные объекты.

## Активация
Чтобы использовать эту возможность, необходимо включить режим рефлексии одним из способов:

1.  Вызвать `$bot->reflection()` (базовый режим).
2.  Вызвать `$bot->setContainer($container)` (если используется PSR-11 контейнер). 
3.  Вызвать `$bot->setCache($cache)` (если используется PSR-16 кеш).

## Встроенные зависимости

Библиотека умеет автоматически внедрять следующие классы:

| Класс / Интерфейс                      | Описание                      |
|:---------------------------------------|:------------------------------|
| `ZenithGram\ZenithGram\ZG`             | Основной объект библиотеки.   |
| `ZenithGram\ZenithGram\UpdateContext`  | Контекст текущего обновления. |
| `ZenithGram\ZenithGram\Dto\UserDto`    | Данные пользователя (`from`). |
| `ZenithGram\ZenithGram\Dto\ChatDto`    | Данные чата (`chat`).         |
| `ZenithGram\ZenithGram\Dto\MessageDto` | Объект сообщения.             |

### Пример с встроенными типами

```php
use ZenithGram\ZenithGram\Dto\UserDto;
use ZenithGram\ZenithGram\Dto\ChatDto;

$bot->reflection();

$bot->onText('hello', 'Привет')
    ->func(function (UserDto $user, ChatDto $chat, ZG $tg) {
        $tg->reply("Привет, {$user->firstName}!");
    });
```

## Именованные параметры маршрутов
Рефлексия идеально с именными параметрами. Имена переменных в шаблоне маршрута должны совпадать с именами аргументов функции.

```php
// Маршрут: /gift {username} {amount}
$bot->onCommand('gift', '/gift {username} {amount}')
    ->func(function (ZG $tg, string $username, $amount) {
        // $username и $amount будут автоматически заполнены из текста команды
        $tg->reply("Отправлено $amount монет пользователю $username");
    });
```

Это работает и для `onCallback`:

```php
// data: product_{id}_delete
$bot->onCallback('del_prod', 'product_{id}_delete')
    ->func(function (ZG $tg, $id) {
        // Удаляем товар с $id
    });
```

## Использование PSR-11 Контейнера (Внешние сервисы)

Если вы пишете сложного бота, вам, вероятно, понадобятся база данных, логгер или другие сервисы. ZenithGram позволяет интегрировать любой PSR-11 контейнер (например, PHP-DI).

```php
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\ZG;
use DI\ContainerBuilder; // Пример с PHP-DI

// 1. Настраиваем контейнер
$builder = new ContainerBuilder();
$builder->addDefinitions([
    DatabaseService::class => function() {
        return new DatabaseService('localhost', 'user', 'pass');
    },
    LoggerService::class => function() {
        return new LoggerService('./logs.txt');
    }
]);
$container = $builder->build();

// 2. Передаем контейнер в бота
$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);
$bot->setContainer($container); // Это также включает reflection()

// 3. Запрашиваем сервисы в обработчиках
$bot->onCommand('balance', '/balance')
    ->func(function (ZG $tg, UserDto $user, DatabaseService $db) {
        // DatabaseService автоматически взят из контейнера!
        $balance = $db->getBalance($user->id);
        $tg->reply("Ваш баланс: $balance");
    });

$bot->run();
```

## Кеширование (Оптимизация)

Анализ функций через Reflection API занимает время. Чтобы не делать это при каждом запросе, рекомендуется подключить PSR-16 кеш.

Библиотека поставляется с простым файловым кешем `SimpleFileCache`.

```php
use ZenithGram\ZenithGram\Utils\SimpleFileCache;

$cache = new SimpleFileCache(__DIR__ . '/storage/cache');
$bot->setCache($cache);
```

Теперь метаданные о параметрах функций будут сохраняться в файлы, и бот будет работать быстрее.

## Middleware и Рефлексия

Рефлексия работает и в Middleware. Не забудьте, что в Middleware всегда передается аргумент `$next`.

```php
$bot->middleware(function (UserDto $user, callable $next, ZG $tg) {
    if ($user->id === 12345) {
        $next();
    } else {
        $tg->reply('Доступ запрещен');
    }
});
```