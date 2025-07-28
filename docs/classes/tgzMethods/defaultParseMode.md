---
title: TGZ
sidebarDepth: 0
---


## defaultParseMode
Метод устанавливает режим разметки для каждого сообщения по умолчанию
### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |
### Возвращает
`$this` - экземпляр класса, который вызвал этот метод
### Пример использования
```php
<?php
require_once 'tgz/autoload.php';
use ZhenyaGR\TGZ\TGZ;
$tg = TGZ::create(ТОКЕН);
$tg->defaultParseMode('MarkdownV2');
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
