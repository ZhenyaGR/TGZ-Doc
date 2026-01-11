---
title: Button
description: "Вспомогательный класс для создания кнопок."
---

# **Button**
Вспомогательный класс для генерации кнопок

## Импорт
Для использования класса необходимо его импортировать через конструкцию `use`
```php
use ZenithGram\ZenithGram\Button;
```

## text
Обычная текстовая кнопка
```php
Button::text('Текст кнопки');
```

## cb
Inline кнопка
```php
Button::cb('Текст кнопки', 'callbackData');
```

## url 
Inline кнопка-ссылка
```php
Button::url('Текст кнопки', 'http://button.url');
```

## webApp
Inline кнопка для WebApp
```php
Button::webApp('Текст кнопки', 'http://app.url');
```

## contact
Кнопка запроса контакта
```php
Button::contact('Текст кнопки');
```

## location
Кнопка запроса геолокации
```php
Button::location('Текст кнопки');
```
