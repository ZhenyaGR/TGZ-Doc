---
title: kbd
description: "Добавляет Reply-клавиатуру."
sidebarDepth: 0
---

# kbd
Метод управляет клавиатурой и inline-кнопками в сообщении

## Параметры метода
| # |       Название       |   Тип    |                   Описание                    |
|:-:|:--------------------:|:--------:|:---------------------------------------------:|
| 1 |     **buttons**      | `array`  |          Принимает объект клавиатуры          |
| 3 |     **one_time**     |  `bool`  |  Свернуть клавиатуру при нажатии? true/false  |
| 4 |      **resize**      |  `bool`  | Менять размер кнопок в клавиатуре? true/false |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

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
    ->text('Оцените бота от 1 до 5');

$bot->onBotCommand('kbd', '/kbd')
    ->func(function(ZG $tg) {
        $tg->msg("Клавиатура:")
            ->kbd([
                [Button::text('Показать профиль')],
                // Стандартная текстовая кнопка
                ['buttonBot']
                // Кнопка, созданная через класс Bot
            ], one_time: true, resize: true)
            ->send();
    });
    
// Обрабатываем нажатие на кнопку "Показать профиль"
$bot->onText('profile', 'Показать профиль')
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
