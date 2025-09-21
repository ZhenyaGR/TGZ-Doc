---
title: Обновления
---

# Редактирование сообщения
При изменении пользователем сообщения, бот получает обновление в виде `message_edit`.

## Голосовое сообщение
```json
{
    "update_id": 123,
    "edited_message": {
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
        "edit_date": 123,
        "text": "Edited message text"
    }
}
```