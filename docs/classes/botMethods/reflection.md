---
url: 'https://zenithgram.github.io/classes/botMethods/reflection.md'
description: Включает режим рефлексии для автоматического внедрения зависимостей.
---

# reflection
Метод включает использование рефлексии (Reflection API) для обработки аргументов функций-обработчиков (`func`) и middleware. Это позволяет использовать Type Hinting для автоматического получения объектов `UserDto`, `ChatDto`, `MessageDto` и аргументов маршрута без необходимости вручную извлекать их из объекта `ZG`.

::: warning Не используйте без кеша
Reflection API очень тяжелая операция и может существенно замедлить действие бота. Поэтому на продакшене без кеша желательно не использовать.
:::

## Параметры
Метод не принимает параметров.

## Возвращает
`Bot` — экземпляр класса `Bot`.

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Dto\UserDto;

$tg = ZG::create('ТОКЕН_БОТА');
$bot = new Bot($tg);

// Включаем рефлексию
$bot->reflection();

// Теперь мы можем указывать UserDto в аргументах, и библиотека сама его создаст и передаст
$bot->onCommand('start', '/start')
    ->func(function (UserDto $user, ZG $tg) {
        $tg->reply("Привет, {$user->firstName}!");
    });

$bot->run();
```

