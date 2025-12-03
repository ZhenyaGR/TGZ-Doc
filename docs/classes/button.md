---
title: Button
---

# **Button**
Вспомогательный класс для генерации кнопок

## Методы класса

### text
Обычная текстовая кнопка

```php
Button::text('Текст кнопки');
```

### cb
Inline кнопка

```php
Button::cb('Текст кнопки', 'callbackData');
```

### url 
Inline кнопка-ссылка

```php
Button::url('Текст кнопки', 'http://button.url');
```

### webApp
Inline кнопка для WebApp

```php
Button::webApp('Текст кнопки', 'http://app.url');
```

### contact
Кнопка запроса контакта

```php
Button::contact('Текст кнопки');
```

### location
Кнопка запроса геолокации

```php
Button::location('Текст кнопки');
```
