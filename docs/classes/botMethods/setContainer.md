---
url: 'https://zenithgram.github.io/classes/botMethods/setContainer.md'
description: Устанавливает PSR-11 контейнер для внедрения внешних зависимостей.
---

# setContainer
Метод устанавливает [PSR-11 совместимый контейнер](https://www.php-fig.org/psr/psr-11/) (например, PHP-DI). Это позволяет внедрять ваши собственные сервисы (базы данных, логгеры, API-клиенты) в функции-обработчики ботов.

::: tip Автоматическое включение
Использование этого метода автоматически включает режим `reflection()`.
:::

## Параметры
| # |   Название    |         Тип          | Описание                                                          |
|:-:|:-------------:|:--------------------:|:------------------------------------------------------------------|
| 1 | **container** | `ContainerInterface` | Объект, реализующий интерфейс `Psr\Container\ContainerInterface`. |

## Возвращает
`Bot` — экземпляр класса `Bot`.

## Пример использования
```php
// Предположим, у вас есть настроенный контейнер $container
$bot->setContainer($container);

$bot->onCommand('profile', '/profile')
    ->func(function (ZG $tg, DatabaseService $db, UserDto $user) {
        // $db будет автоматически взят из контейнера
        // $user будет автоматически создан из обновления
        $balance = $db->getUserBalance($user->id);
        $tg->msg("Ваш баланс: $balance")->send();
    });
```

