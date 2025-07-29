---
title: Message
sidebarDepth: 0
---

## parseMode
Метод устанавливает режим разметки для сообщения
### Параметры метода
| # |    Название    |   Тип    |        Возможные значения        |
|:-:|:--------------:|:--------:|:--------------------------------:|
| 1 | **parse_mode** | `string` | `HTML`, `Markdown`, `MarkdownV2` |
### Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении
### Пример использования
```php
<?php
require_once __DIR__ . 'vendor/autoload.php'; 

use ZhenyaGR\TGZ\TGZ;

$tg = TGZ::create(BOT_TOKEN);
$tg->initText($text)
    ->initType($type);

if ($type === 'bot_command') {    
    switch ($text) {
        case '/html':
            $tg->msg("<b>Отправка сообщений с форматированием HTML</b>")
                ->parseMode('HTML')
                ->send();
            break;
            
        case '/markdown':
            $tg->msg("*Отправка сообщений с форматированием Markdown*")
                ->parseMode('MarkdownV2')
                ->send();
            break;
    }
}
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
