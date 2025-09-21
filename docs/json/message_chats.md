---
title: Обновления
---

# Обновления с чатом
Сюда входят: добавление пользователя, исключение пользователя и изменение названия чата.

## Добавление пользователя
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
        "new_chat_participant": {
            "id": NEW_USER_ID,
            "is_bot": false,
            "first_name": "NewFirstName",
        },
        "new_chat_member": {
            "id": NEW_USER_ID,
            "is_bot": false,
            "first_name": "NewFirstName",
        },
        "new_chat_members": [
            {
                "id": NEW_USER_ID,
                "is_bot": false,
                "first_name": "NewFirstName",
            }
        ]
    }
}
```

## Исключение пользователя
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
        "left_chat_participant": {
            "id": LEFT_USER_ID,
            "is_bot": false,
            "first_name": "LeftFirstName",
        },
        "left_chat_member": {
            "id": LEFT_USER_ID,
            "is_bot": false,
            "first_name": "LeftFirstName",
        }
    }
}
```

## Изменение названия чата
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
            "title": "newTitle",
            "type": "supergroup"
        },
        "date": 123,
        "new_chat_title": "newTitle"
    }
}
```