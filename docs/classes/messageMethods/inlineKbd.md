---
title: inlineKbd
description: "Добавляет Inline-клавиатуру."
sidebarDepth: 0
---

# inlineKbd
Метод добавляет к сообщению inline-кнопки

## Параметры метода
| # |         Название         |   Тип    |     Описание      |
|:-:|:------------------------:|:--------:|:-----------------:|
| 1 |       **buttons**        | `array`  | Объект клавиатуры |

## Возвращает
`Message`|`Action` - экземпляр класса Message или Action, содержащий информацию о сообщении

::: tip Контекст вызова
Этот метод реализован через общий трейт и возвращает текущий экземпляр объекта.</br>
Тип возвращаемого значения зависит от того, какой класс вы используете в данный момент:
*   При вызове у экземпляра **Message** вернется объект `Message`.
*   При вызове у экземпляра **Action** вернется объект `Action`.
:::

## Пример использования
```php
<?php    
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;
use ZenithGram\ZenithGram\Bot;
use ZenithGram\ZenithGram\Button;

$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Создаем кнопку и сразу добавляем обработчик
$bot->btn('buttonBot', 'Оценить')
    ->query('Загружаю...')
    ->text('Оцените бота от 1 до 5');

$bot->onCommand('inlineKbd', '/inlineKbd')
    ->func(function(ZG $tg) {
        $tg->msg("Inline-клавиатура:")
            ->inlineKbd([
                [Button::cb('Показать профиль', 'show_profile')],
                // Стандартная callback-кнопка
                [Button::url('Посетить сайт', 'https://example.com/')],
                // Кнопка с ссылкой
                ['buttonBot']
                // Кнопка, созданная через класс Bot
            ])
            ->send();
    });
    
// Обрабатываем нажатие на кнопку "Показать профиль"
$bot->onCallback('show_profile')
    ->query('Загружаю...')
    ->text('Ваш профиль пуст');

$bot->run();
```

## Формат клавиатуры
Клавиатура - массив из массивов, которые содержат кнопки 
```php
$kbd = [
    ['button1', 'button2'],             // Кнопки в первом ряду
    ['button3'],                        // Кнопки во втором ряду
    ['button4', 'button5', 'button6']   // Кнопки в третьем ряду
];
```

## Вспомогательные методы
- [`Класс Button`](/classes/button) - Класс для создания кнопок
- [`btn`](/classes/botMethods/btn.md) - Создание кнопки классом Bot
- `answerCallbackQuery` - Отправка уведомления о нажатии callback-кнопки
  
