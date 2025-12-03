---
title: Bot
---

# onCallbackPreg
Метод `onCallbackPreg` создает маршрут для обработки `callback_query` (нажатий на inline-кнопки). Для сравнения использует регулярные выражения.

Этот метод полезен, когда вы используете пагинацию кнопок, чтобы упрощать обработку кнопок навигации.

## Параметры
| # |  Название   |   Тип    | Описание                                              |
|:-:|:-----------:|:--------:|:------------------------------------------------------|
| 1 |   **id**    | `string` | Уникальный идентификатор для этого маршрута.          |
| 2 | **pattern** | `string` | Регулярное выражение для сравнения с `callback_data`. |

## Возвращает
`Action` — экземпляр класса `Action` (Вспомогательный класс), на который можно навешивать дальнейшие действия (`text`, `func` и т.д.).

## Пример использования
В этом примере мы создаем inline-кнопки через пагинацию и обрабатываем навигацию.

```php
require_once __DIR__ . '/vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;
use ZhenyaGR\TGZ\Bot;
use ZhenyaGR\TGZ\Button;
use ZhenyaGR\TGZ\Pagination; // Не забудьте подключить класс констант

$tg = TGZ::create('ТОКЕН');
$bot = new Bot($tg);

function getCatalogKeyboard(TGZ $tg, int $page): array {
    $items = [];
    for ($i = 1; $i <= 30; $i++) {
        $items[] = Button::cb("📦 Товар $i", "item_$i");
    }
    return $tg->pagination()->setItems($items)->setPerPage(6)->setColumns(2)->setPage($page)->setPrefix('catalog_page_')->create();
}

// 1. Команда вызова каталога
$bot->onBotCommand('catalog', '/catalog')
    ->func(function(TGZ $tg) {
        $keyboard = getCatalogKeyboard($tg, 1);
        $tg->msg("📂 Каталог товаров (Стр. 1):")
            ->inlineKbd($keyboard)
            ->send();
    });

// 2. Обработчик переключения страниц
$bot->onCallbackPreg('catalog_handler', '/^catalog_page_(\d+)$/')
    ->func(function(TGZ $tg, int $page) {
        $query_id = $tg->getQueryId();
        $tg->answerCallbackQuery($query_id);

        $keyboard = getCatalogKeyboard($tg, $page);

        $tg->msg("📂 Каталог товаров (Стр. $page):")
           ->inlineKbd($keyboard)
           ->editText();
    });

$bot->run()
```