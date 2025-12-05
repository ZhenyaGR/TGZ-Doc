---
title: parseMode
description: "Устанавливает разметку для объяснений."
sidebarDepth: 0
---

# parseMode-методы
Три метода для установки режима разметки, но в разных сценариях 

## parseMode
Методы для устанавливает режим разметки для вопроса и объяснения

### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |

### Возвращает
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->parseMode('MarkdownV2')
    ->send();
```

## questionParseMode
Метод устанавливает режим разметки для вопроса

### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |

### Возвращает
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('regular')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->questionParseMode('MarkdownV2')
    ->send();
```

## explanationParseMode
Метод устанавливает режим разметки для объяснения (Только для опросов типа `quiz`)

### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |

### Возвращает
`Poll` - экземпляр класса Poll, содержащий информацию об опросе

### Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);

$tg->poll('quiz')
    ->question('Вопрос')
    ->addAnswers('Ответ 1', 'Ответ 2', 'Ответ 3')
    ->correctAnswer(1)
    ->explanation('Объяснение')
    ->explanationParseMode('MarkdownV2')
    ->send();
```

## Примеры разметок

### **MarkdownV2**
```markdown
*Жирный*  
_Курсив_  
~Зачёркнутый~
__Подчёркнутый__  
`Моноширинный`
```Блок кода```
[Ссылка](https://github.com/ZhenyaGR/TGZ)  
||Спойлер||
```

### **HTML**
```html
<b>Жирный</b>
<i>Курсив</i>
<s>Зачёркнутый</s>
<u>Подчёркнутый</u>
<code>Моноширинный</code>
<pre>Блок кода</pre>
<a href="https://github.com/ZhenyaGR/TGZ">Ссылка</a>
<span class="tg-spoiler">Спойлер</span>
```

## Примечание:
Для MarkdownV2 экранируйте символы `_*[]()~>#+-=|{}.!` с помощью `\`, например: `\_некурсив\_`
