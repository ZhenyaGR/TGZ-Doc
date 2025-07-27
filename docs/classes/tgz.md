---
title: TGZ
sidebarDepth: 0
---

## Подключение
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
```

## create
С помощью метода `create` создается экземпляр класса `TGZ`
### Используя токен бота, полученный в [BotFather](https://t.me/BotFather) 
#### Параметры метода
| # | Название  |   Тип    | Описание                          |
|:-:|:---------:|:--------:|-----------------------------------|
| 1 | **token** | `string` | Токен пользователя или сообщества |
```php:no-line-numbers
$tg = TGZ::create(ТОКЕН);
```



## msg
Метод создает объект класса Message для конструктора сообщений
### Параметры метода
|#  | Название |   Тип    |
|:-:|:--------:|:--------:|
|1  |   **text**   | `string` |
### Возвращает
`Message` - экземпляр класса Message
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->msg("Привет")->send();
```
#### Подробнее про класс Message [здесь](/classes/message.md)

## poll
Метод создает объект класса Poll для конструктора опросов
### Параметры метода
| # | Название |   Тип    |           Описание            |
|:-:|:--------:|:--------:|:-----------------------------:|
| 1 | **type** | `string` | Тип опроса: `regular`, `quiz` |
### Возвращает
`Poll` - экземпляр класса Poll
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->send();
```
#### Подробнее про класс Poll [здесь](/classes/poll.md)

## inline
Метод создает объект класса Inline для конструктора Inline-запросов
### Параметры метода
| # | Название |   Тип    |                                       Описание                                       |
|:-:|:--------:|:--------:|:------------------------------------------------------------------------------------:|
| 1 | **type** | `string` | Тип Inline-запроса: `article`, `photo`, `gif`, `video`, `audio`, `voice`, `document` |
### Возвращает
`Inline` - экземпляр класса Inline
### Пример использования 
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$inline_result = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('Текст сообщения')
        ->create(),
];
```
#### Подробнее про класс Inline [здесь](/classes/inline.md)



## buttonText
Метод возвращает массив с текстовой кнопкой
### Параметры метода
| # |    Название    |   Тип    |
|:-:|:--------------:|:--------:|
| 1 | **buttonText** | `string` |
### Возвращает
`array` - массив с текстовой кнопкой
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$kbd = [[$tg->buttonText('Нажми меня')]];
$tg->msg('Текстовая кнопка')
    ->kbd($kbd)
    ->send();
```

