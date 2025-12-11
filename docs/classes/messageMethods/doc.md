---
title: doc
description: "Добавляет документ."
sidebarDepth: 0
---

# doc
Метод добавляет к сообщению одно или несколько файлов

## Параметры метода
| # | Название |        Тип        |                   Описание                   |
|:-:|:--------:|:-----------------:|:--------------------------------------------:|
| 1 | **url**  | `string`\|`array` | Принимает ссылку, локальный путь и ID файла |

## Возвращает
`Message` - экземпляр класса Message, содержащий информацию о сообщении

## Пример использования
```php
<?php
require_once __DIR__ . '/vendor/autoload.php'; 
use ZenithGram\ZenithGram\ZG;

$tg = ZG::create(BOT_TOKEN);
$text = $tg->getText();
$type = $tg->getType();

if ($type === 'bot_command') {

    $doc_url = "https://example.com/doc.txt";
    $doc_id = "AgACAgIAAxkDAAICUmfbEudQY2SXKgsMr00_b_ZAcYErAALP9TEbJsnZSlufCaTwR76hAQADAgADeQADNgQ";
    $doc_path = "media/doc.txt";

    switch ($text) {
        case '/docUrl':
            $tg->msg("Отправка сообщения с файл по ссылке")
                ->doc($doc_url)
                ->send();
            break;
           
        case '/docId':
            $tg->msg("Отправка сообщения с файлом по ID") 
                ->doc($doc_id)
                ->send();
            break;
           
        case '/docPath':
            $tg->msg("Отправка сообщения с файлом по локальному пути") 
                ->doc($doc_path)
                ->send();
            break;

        case '/docArray':
            $tg->msg('Отправка сообщения с массивом файлов')
                ->doc([$doc_url1, $doc_url2])
                ->send();
            break;

        case '/docLot':
            $tg->msg('Отправка сообщения с несколькими вызовами doc()')
                ->doc($doc_url1)
                ->doc($doc_url2)
                ->send();
            break;
    }
}
```

## Вспомогательные методы
- [`getFileID`](/classes/zenithMethods/getFileID.md) - Получить ID файла