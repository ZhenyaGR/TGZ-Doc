---
title: Pagination
sidebarDepth: 0
---

# setPrefix
Устанавливает префикс для `callback_data` кнопок навигации.
Кнопки навигации будут иметь callback_data вида: `{prefix}{page_number}` (например, `page_2`, `page_3`).

## Параметры метода
| # |      Название      |   Тип    |         Описание          |
|:-:|:------------------:|:--------:|:-------------------------:|
| 1 | **callbackPrefix** | `string` | Префикс для callback_data |

## Возвращает
`Pagination` — экземпляр класса Pagination

## Пример использования
```php
$tg->pagination()->setPrefix('catalog_page_');
// Кнопка "Вперед" будет иметь callbackData вида 'catalog_page_2'
```