---
url: 'https://zenithgram.github.io/classes/botMethods/setCache.md'
description: Устанавливает PSR-16 кеш для оптимизации рефлексии.
---

# setCache
Метод устанавливает [PSR-16 совместимый кеш](https://www.php-fig.org/psr/psr-16/). Рефлексия — ресурсоемкая операция. Использование кеша позволяет запомнить структуру аргументов ваших функций и не анализировать их при каждом запросе, что значительно повышает производительность.

::: tip Встроенный кеш
Библиотека предоставляет простой файловый кеш `ZenithGram\ZenithGram\Utils\SimpleFileCache`, который можно использовать, если у вас нет Redis или Memcached.
:::

## Параметры
| # | Название  |       Тип        | Описание                                                        |
|:-:|:---------:|:----------------:|:----------------------------------------------------------------|
| 1 | **cache** | `CacheInterface` | Объект, реализующий интерфейс `Psr\SimpleCache\CacheInterface`. |

## Возвращает
`Bot` — экземпляр класса `Bot`.

## Пример использования
```php
use ZenithGram\ZenithGram\Utils\SimpleFileCache;

// Используем встроенный файловый кеш
$bot->setCache(new SimpleFileCache(__DIR__ . '/storage/cache'));
```
