---
title: Inline
sidebarDepth: 0
---

## parseMode
Метод устанавливает режим разметки для сообщения

### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |

### Возвращает
`Inline` - экземпляр класса Inline

### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php';
use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create('ТОКЕН');
$tg->initQuery($query_id);

$results = [
    $tg->inline('article')
        ->id('article')
        ->title('Команда')
        ->description('Описание команды')
        ->text('*text*')
        ->parseMode('MarkdownV2')
        ->create(),
];

$tg->answerInlineQuery($query_id, $results);
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

### Примечание:
Для MarkdownV2 экранируйте символы `_*[]()~>#+-=|{}.!` с помощью `\`, например: `\_некурсив\_`
