---
title: Storage
description: "Классы для работы с хранилищем состояний (FSM)."
---

# **Storage**
В библиотеке реализована поддержка FSM (Finite State Machine) для создания диалогов. Для работы с состояниями используются классы хранилищ.

## FileStorage
Стандартная реализация хранилища на файлах (JSON). Использует асинхронные методы для работы с файловой системой, не блокируя поток выполнения.

### Создание экземпляра
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\Storage\FileStorage;

// По умолчанию создает папку 'storage/sessions' в корне проекта
$storage = new FileStorage();

// Можно указать свой путь
$storage = new FileStorage(__DIR__ . '/my_sessions');
```

## RedisStorage
Реализация хранилища на базе Redis. Обеспечивает высокую скорость работы и идеально подходит для высоконагруженных проектов.

Вот таблица с параметрами конструктора, оформленная в запрошенном стиле:

### Параметры конструктора
| # |  Название   |       Тип        | Описание                                                                   |
|:-:|:-----------:|:----------------:|:---------------------------------------------------------------------------|
| 1 |  **host**   |     `string`     | Хост сервера Redis.<br>_По умолчанию: `'127.0.0.1'`_                       |
| 2 |  **port**   |      `int`       | Порт сервера.<br>_По умолчанию: `6379`_                                    |
| 3 | **prefix**  |     `string`     | Префикс для ключей (во избежание коллизий).<br>_По умолчанию: `'zg_fsm:'`_ |
| 4 | **dbIndex** |      `int`       | Номер базы данных Redis.<br>_По умолчанию: `0`_                            |
| 5 |  **auth**   | `string`\|`null` | Пароль для авторизации, если требуется.<br>_По умолчанию: `null`_          |

### Создание экземпляра
```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZenithGram\ZenithGram\Storage\RedisStorage;

// 1. Подключение с настройками по умолчанию
$storage = new RedisStorage();

// 2. Указание кастомных настроек (именованные аргументы)
$storage = new RedisStorage(
    host: '192.168.1.10',
    port: 6379,
    prefix: 'my_bot_fsm:',
    dbIndex: 1,
    auth: 'secret_password'
);
```

## StorageInterface
Интерфейс, который должны реализовать все хранилища. Вы можете написать свою реализацию для MySQL, Memcached и т.д.

### Методы интерфейса
- `getState(int|string $user_id): ?string` — Получить текущее состояние.
- `setState(int|string $user_id, string $state): void` — Установить состояние.
- `clearState(int|string $user_id): void` — Очистить состояние.
- `getSessionData(int|string $user_id): array` — Получить данные сессии.
- `setSessionData(int|string $user_id, array $data): void` — Сохранить данные.
- `clearSessionData(int|string $user_id): void` — Очистить данные.