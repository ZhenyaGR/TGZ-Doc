---
title: Обновления
---

# Новое сообщение
Представляет собой обычное текстовое сообщение, пришедшее в чат с ботом.

## Обычное сообщение в личном чате
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": USER_ID,
            "first_name": "FirstName",
            "username": USERNAME,
            "type": "private"
        },
        "date": 123,
        "text": "Message text",
    }
}
```

## Обычное сообщение в групповом чате
Отличается от предыдущего типа, только параметром `chat`, но в остальном одинаковые.
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": CHAT_ID,
            "title": "Title",
            "username": CHAT_USERNAME,
            "type": "supergroup"
        },
        "date": 123,
        "text": "Message text"
    }
}
```

## Команда бота
Команды бота представляют собой сообщения, начинающиеся с `/` на английском языке, например `/start`.
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": USER_ID,
            "first_name": "FirstName",
            "username": USERNAME,
            "type": "private"
        },
        "date": 123,
        "text": "/start",
        "entities": [
            {
                "offset": 0,
                "length": 6,
                "type": "bot_command"
            }
        ]
    }
}
```

## Сообщение с реферальными данными
Если пользователь написал новое сообщение через реферальную ссылку, то в поле `text` будут содержаться дополнительные данные.
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
           "id": USER_ID,
           "is_bot": false,
           "first_name": "FirstName",
           "username": USERNAME,
           "language_code": "ru"
        },
        "chat": {
            "id": USER_ID,
            "first_name": "FirstName",
            "username": USERNAME,
            "type": "private"
        },
        "date": 123,
        "text": "/start game_38",
        "entities": [
            {
                "offset": 0,
                "length": 6,
                "type": "bot_command"
            }
        ]
    }
}
```

## Сообщение с ответом на другое
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": CHAT_ID,
            "title": "Title",
            "username": CHAT_USERNAME,
            "type": "supergroup"
        },
        "date": 123,
        "message_thread_id": 123,
        "reply_to_message": {
            "message_id": 123,
            "from": {
                "id": USER_ID,
                "is_bot": false,
                "first_name": "FirstName",
                "username": USERNAME,
                "language_code": "ru"
            },
            "chat": {
                "id": CHAT_ID,
                "title": "Title",
                "username": CHAT_USERNAME,
                "type": "supergroup"
            },
            "date": 123,
            "text": "Reply text",
        },
        "text": "Message text"
    }
}
```


## Сообщение с упоминанием пользователя
Упоминание пользователя, у которого есть username, представляется в виде `@username`.
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": CHAT_ID,
            "title": "Title",
            "type": "supergroup"
        },
        "date": 123,
        "text": "@telegram",
        "entities": [
            {
                "offset": 0,
                "length": 9,
                "type": "mention"
            },
        ]
    }
}
```

## Сообщение с упоминанием пользователя, у которого нет username
Отличается от предыдущего тем, что у упоминаемого пользователя нет username.
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
          "id": USER_ID,
          "is_bot": false,
          "first_name": "FirstName",
          "username": USERNAME,
          "language_code": "ru"
        },
        "chat": {
            "id": CHAT_ID,
            "title": "Title",
            "type": "supergroup"
        },
        "date": 123,
        "text": "Пользователь123",
        "entities": [
            {
                "offset": 0,
                "length": 15,
                "type": "text_mention",
                "user": {
                    "id": LINK_USER_ID,
                    "is_bot": false,
                    "first_name": "LinkFirstName",
                }
            }
        ]
    }
}
```

## Сообщение с ссылкой
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
             "id": CHAT_ID,
             "title": "Title",
             "type": "supergroup"
        },
        "date": 123,
        "text": "https://t.me/",
        "entities": [
            {
                "offset": 0,
                "length": 13,
                "type": "url"
            },
        ],
        "link_preview_options": {
            "url": "https://t.me/"
        }
    }
}
```