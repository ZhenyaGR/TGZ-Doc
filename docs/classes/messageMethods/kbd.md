---
title: Message
sidebarDepth: 0
---

## kbd
Метод управляет клавиатурой и inline-кнопками в сообщении
### Параметры метода
| # |         Название         |   Тип    |                        Описание                         |
|:-:|:------------------------:|:--------:|:-------------------------------------------------------:|
| 1 |       **buttons**        | `array`  |               Принимает объект клавиатуры               |
| 2 |        **inline**        |  `bool`  |          Являются ли кнопки inline? true/false          |
| 3 |  **one_time_keyboard**   |  `bool`  |       Свернуть клавиатуру при нажатии? true/false       |
| 4 |   **resize_keyboard**    |  `bool`  |      Менять размер кнопок в клавиатуре? true/false      |
| 5 |   **remove_keyboard**    |  `bool`  | Принимает значения: `true`, `false`. Удаляет клавиатуру |
### Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении
### Пример использования

```php
<?php    
require_once __DIR__ . 'vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ as tg; 

$tg = tg::create(BOT_TOKEN);
$tg->initVars(type: $type, text: $text, callback_data: $callback_data, query_id: $query_id);

if ($type === 'text' || $type === 'bot_command') {
    switch ($text) {
        case '/inline':
            // Создаем массив с кнопками
            $kbd = [
                [   // Создаем callback-кнопки
                    $tg->buttonCallback('Кнопка 1', 'call1'),
                    $tg->buttonCallback('Кнопка 2', 'call2')
                ],
                [
                    $tg->buttonCallback('Кнопка-Редактирование', 'edit')
                ],
                [   // Создаем url-кнопку
                    $tg->buttonUrl('GitHub Библиотеки', "https://github.com/ZhenyaGR/TGZ")
                ]
            ];
            $tg->msg("Текст сообщения")
                ->kbd($kbd, inline: true)
                ->send();
            // Отправляем с параметром inline: true
            // !!! Важно: все кнопки должны быть callback или url
            break;

        case '/keyboard':
            // Создаем массив с кнопками
            $kbd = [ // Создаем текстовые кнопки
                [$tg->buttonText('Текстовая кнопка')],
                [$tg->buttonText('Удалить клавиатуру')]
            ];
            $tg->msg("Текст сообщения")
                ->kbd($kbd, resize_keyboard: true, one_time_keyboard: false)
                ->send();
            // Отправляем с параметрами inline: false (по умолчанию), resize_keyboard: true, one_time_keyboard: false
            // !!! Важно: все кнопки должны быть text или url
            break;
            
        case 'Текстовая кнопка':
            // Приходит как обычное сообщение
            $tg->msg("Вы нажали текстовую кнопку")->send();        
            break;
            
        case 'Удалить клавиатуру':
            $tg->msg("Клавиатура удалена")
                ->kbd(remove_keyboard: true)
                ->send();
            // Удаляем клавиатуру
            break;
    }
} else if ($type === 'callback_query') {
    $tg->answerCallbackQuery($query_id, ['text' => "Вы нажали кнопку!"]);    
    // Отправляем уведомление телеграму о нажатии - это обязательно для callback-запросов
    
    switch ($callback_data) {
        case 'call1':
            $tg->msg("Вы нажали кнопку №1")->send();
            break;
            
        case 'call2':
            $tg->msg("Вы нажали кнопку №2")->send();
            break;
        
        case 'edit':
            $tg->msg("Сообщение отредактировано")->sendEdit();
            // Редактируем сообщение
            break;
    }
}
```

### Формат клавиатуры

Клавиатура - массив из массивов, которые содержат кнопки 
```php
$kbd = [
    ['button1', 'button2'],             // Кнопки в первом ряду
    ['button3'],                        // Кнопки во втором ряду
    ['button4', 'button5', 'button6']   // Кнопки в третьем ряду
];
```

### Вспомогательные методы
- [`buttonText`](/classes/tgzMethods/buttons.md) - создает текстовую кнопку
- [`buttonUrl`](/classes/tgzMethods/buttons.md) - создает url-кнопку
- [`buttonCallback`](/classes/tgzMethods/buttons.md) - создает callback-кнопку
- `answerCallbackQuery` - отправляет уведомление о нажатии callback-кнопки
  
