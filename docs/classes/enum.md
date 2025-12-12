---
title: Enum
description: "Все Enum и их значения"
---

# Enum
`Enum` (или `Перечисление`) - специальный тип данных для создания ограниченного, закрытого набора именованных констант (значений), который улучшает читаемость и безопасность кода, позволяя избегать "неверных состояний"

## MessageParseMode
Содержит данные об разметке сообщения. Используется во всех методах типа `parseMode()`.

### Возможные значения
* `MessageParseMode::HTML` — Разметка HTML.
* `MessageParseMode::Markdown` — Разметка Markdown.
* `MessageParseMode::MarkdownV2` — Разметка MarkdownV2.
* `MessageParseMode::None` — Отсутствие разметки.

## PaginationMode
Определяет, какого типа будут использоваться кнопки навигации для метода `setMode()` (Класс **[Pagination](/classes/pagination)**.

### Возможные значения
* `PaginationMode::ARROWS` — Стандартные стрелки навигации "Предыдущая страница" и "Следующая страница" (по умолчанию).
* `PaginationMode::NUMBERS` — Несколько номеров страниц на строке.

## PaginationLayout
Определяет расположение кнопок навигации для метода `setNavigationLayout()` (Класс **[Pagination](/classes/pagination)**.

### Возможные значения
* `PaginationLayout::ROW` — Все кнопки навигации в одну строку (по умолчанию).
* `PaginationLayout::SPLIT` — Разделение: кнопки "Назад/Вперед" на одной строке, "Начало/Конец" на второй.
* `PaginationLayout::SMART` — Умная группировка: если кнопок навигации больше 2-х, они разделяются на две строки; Если 2 и меньше — в одну строку.

## PaginationNumberStyle
Определяют внешний вид номерных кнопок-страниц для метода `setNumberStyle()` (Класс **[Pagination](/classes/pagination)**).

### Возможные значения
* `PaginationNumberStyle::CLASSIC` — Цифры: `1`, `2`, `3` и т.д.
* `PaginationNumberStyle::EMOJI` — Смайлики: `1️⃣`, `2️⃣`, `3️⃣` и т.д.