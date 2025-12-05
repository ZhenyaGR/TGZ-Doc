---
title: setNumberStyle
description: "Стиль цифр (обычные/эмодзи)."
sidebarDepth: 0
---

# setNumberStyle
Устанавливает стиль для номерных кнопок-страниц.

## Параметры метода
| # | Название  |                 Тип                 |        Описание         |
|:-:|:---------:|:-----------------------------------:|:-----------------------:|
| 1 | **style** | `PaginationNumberStyle`\|`callable` | Стиль текста на кнопках |

### PaginationNumberStyle
PaginationNumberStyle — перечисление `(Enum)`. Содержит 2 константы, они определяют вид номерных кнопок-страниц

* `PaginationNumberStyle::CLASSIC` (0) — Цифры: `1`, `2`, `3` и т.д.
* `PaginationNumberStyle::EMOJI` (1) — Смайлики: `1️⃣`, `2️⃣`, `3️⃣` и т.д.

### Callable
Callable — функция, принимающая номер страницы и возвращающая строку для кнопки.

## Возвращает
`Pagination` — экземпляр класса Pagination

## Пример использования
```php
// Цифры
$tg->pagination()->setNumberStyle(PaginationNumberStyle::CLASSIC);

// Смайлики
$tg->pagination()->setNumberStyle(PaginationNumberStyle::EMOJI);

// Callable
$tg->pagination()->setNumberStyle(fn($page) => "Страница $page");
```
