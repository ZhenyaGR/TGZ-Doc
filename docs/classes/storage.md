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

## StorageInterface
Интерфейс, который должны реализовать все хранилища. Вы можете написать свою реализацию для Redis, MySQL, Memcached и т.д.

### Методы интерфейса
- `getState(int|string $user_id): ?string` — Получить текущее состояние.
- `setState(int|string $user_id, string $state): void` — Установить состояние.
- `clearState(int|string $user_id): void` — Очистить состояние.
- `getSessionData(int|string $user_id): array` — Получить данные сессии.
- `setSessionData(int|string $user_id, array $data): void` — Сохранить данные.
- `clearSessionData(int|string $user_id): void` — Очистить данные.