---
title: Обновления
---

# Обновления с чатом
Сюда входят: добавление пользователя, исключение пользователя и изменение названия чата.

## Добавление пользователя
```json
{
    "update_id": 410163128,
    "message": {
        "message_id": 157,
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
        "date": 1734547965,
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
    "update_id": 410163129,
    "message": {
        "message_id": 159,
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
        "date": 1734548011,
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
    "update_id": 410163113,
    "message": {
        "message_id": 109,
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
        "date": 1733818926,
        "new_chat_title": "newTitle"
    }
}
```