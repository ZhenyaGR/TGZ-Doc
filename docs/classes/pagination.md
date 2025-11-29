---
title: Pagination
sidebarDepth: 0
---

# **Pagination**
Класс `Pagination` предоставляет удобный инструмент для создания постраничной навигации (пагинации) для клавиатур. Он автоматически разбивает массив кнопок на страницы и добавляет кнопки навигации.

Конструктор класса не принимает значений 

##  Создание экземпляра `pagination` через **TGZ**
Для создания экземпляра класса используется `pagination` – метод из класса _TGZ_. Этот метод является «синтаксическим сахаром».

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');

// Генерируем массив кнопок (например, 20 штук)
$items = [];
for ($i = 1; $i <= 20; $i++) {
    $items[] = $tg->buttonCallback("Товар $i", "item_$i");
}

// Создаем пагинацию
$keyboard = $tg->pagination()
    ->setItems($items)              // Передаем кнопки
    ->setPerPage(5)                 // 5 кнопок на странице
    ->setColumns(1)                 // В 1 колонку
    ->setPage(1)                    // Текущая страница
    ->setPrefix('page_')            // Префикс для кнопок навигации
    ->create();                     // Собираем массив

// Отправляем сообщение с клавиатурой
$tg->msg("Выберите товар (Страница 1):")
    ->inlineKbd($keyboard)
    ->send();
```

##  Создание экземпляра `pagination` через `new`
Для создания экземпляра класса потребуется его импорт и стандартный синтаксис:

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Pagination;

// Генерируем массив кнопок (например, 20 штук)
$items = [];
for ($i = 1; $i <= 20; $i++) {
    $items[] = $tg->buttonCallback("Товар $i", "item_$i");
}

$pag = new Pagination();

// Создаем пагинацию
$keyboard = $pag->setItems($items)  // Передаем кнопки
    ->setPerPage(5)                 // 5 кнопок на странице
    ->setColumns(1)                 // В 1 колонку
    ->setPage(1)                    // Текущая страница
    ->setPrefix('page_')            // Префикс для кнопок навигации
    ->create();                     // Собираем массив

$tg = TGZ::create(ТОКЕН);

// Отправляем сообщение с клавиатурой
$tg->msg("Выберите товар (Страница 1):")
    ->inlineKbd($keyboard)
    ->send();
```

Оба примера равнозначны 