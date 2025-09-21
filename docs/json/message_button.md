---
title: Обновления
---

# Нажатие на кнопку
В Telegram бот может получить обновление в виде `callback_query`.  
Здесь могут быть сообщение из обычной inline-клавиатуры и из inline-режима 

## inline-клавиатура
```json
{
    "update_id": 123,
    "callback_query": {
        "id": "123",
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "message": {
            "message_id": 410,
            "from": {
                "id": BOT_ID,
                "is_bot": true,
                "first_name": "BotName",
                "username": BOT_USERNAME,
            },
            "chat": {
                "id": USER_ID,
                "is_bot": false,
                "first_name": "FirstName",
                "username": USERNAME,
            },
            "date": 1733326044,
            "text": "Message Text",
            "reply_markup": {
                "inline_keyboard": [
                    {
                        "text": "Button Text",
                        "callback_data": "callback_data"
                    },
                ]
            }
        },
        "chat_instance": "355179612948124317",
        "data": "callback_data"
    }
}
```

## inline-режим
```json
{
    "update_id": 123,
    "callback_query": {
        "id": "123",
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "inline_message_id": "AgAAAPPPBAAouohGQeweidc2B9E",
        "chat_instance": "1922098543218811935",
        "data": "inlineData"
    }
}
```
