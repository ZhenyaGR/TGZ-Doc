---
title: Message
sidebarDepth: 0
---

# inlineKbd
Метод добавляет к сообщению inline-кнопки

## Параметры метода
| # |         Название         |   Тип    |     Описание      |
|:-:|:------------------------:|:--------:|:-----------------:|
| 1 |       **buttons**        | `array`  | Объект клавиатуры |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php    
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ; 

$tg = TGZ::create(BOT_TOKEN);
$bot = new Bot($tg);

// Создаем кнопку и сразу добавляем обработчик
$bot->btn('buttonBot', 'Оценить')
    ->query('Загружаю...')
    ->text('Оцените бота от 1 до 5');

$bot->onCommand('inlineKbd', '/inlineKbd')
    ->func(function(TGZ $tg) {
        $tg->msg("Inline-клавиатура:")
            ->inlineKbd(
                [
                    [$tg->buttonCallback('Показать профиль', 'show_profile')],
                    // Стандартная callback-кнопка
                    
                    [$tg->buttonUrl('Посетить сайт', 'https://example.com/')],
                    // Кнопка с ссылкой
                    
                    ['buttonBot']
                    // Кнопка, созданная через класс Bot
                ]               
            )
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
- [`buttonText`](/classes/tgzMethods/buttons.md) - создает текстовую кнопку
- [`buttonUrl`](/classes/tgzMethods/buttons.md) - создает url-кнопку
- [`buttonCallback`](/classes/tgzMethods/buttons.md) - создает callback-кнопку
- [`btn`](/classes/botMethods/btn.md) - создает кнопки с помощью класса Bot
- `answerCallbackQuery` - отправляет уведомление о нажатии callback-кнопки
  
